import aws from "aws-sdk";
import multer from "multer";
import multers3 from "multer-s3";

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: "eu-north-1",
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only JPEG and PNG"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multers3({
    s3: s3,
    bucket: "course-videos-architectt",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fileName: "COURSES_META_DATA" });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export default upload;
