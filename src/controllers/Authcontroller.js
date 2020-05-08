import bcrypt from "bcryptjs";
import "@babel/polyfill";
import genToken from "../helpers/genToken";
import AuthService from "../service/AuthService";
import hashPassword from "../helpers/hashPassword";

class AuthController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user token
   */
  static async Signup(req, res) {
    const { username, password, email } = req.body;
    const isAdmin = false;
    const hashedPassword = await hashPassword(password);
    const isProUser = false;
    const subStartDate = 0;
    const subEndDate = 0;
    try {
      const createUser = await AuthService.addUser({
        username,
        password: hashedPassword,
        email,
        isAdmin,
        isProUser,
        subStartDate,
        subEndDate
      });

      const token = genToken({ username, email, isAdmin });

      return res.status(201).send({
        status: 201,
        message: "Signup successfull",
        token: token,
        data: createUser
      });
    } catch (e) {
      if (e.name === "SequelizeUniqueConstraintError") {
        const { message } = e.errors[0];
        let errorMessage = message;
        if (message === "username must be unique") {
          errorMessage = "The username is already taken";
        }
        if (message === "email must be unique") {
          errorMessage = "The email is already taken";
        }
        return res.status(400).send({ status: 400, message: errorMessage });
      }
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user token
   */
  static async Signin(req, res) {
    const { username, password } = req.body;

    try {
      const user = await AuthService.findUser(username);
      if (!user) {
        return res
          .status(400)
          .send({ status: 400, message: "Invalid username or password" });
      }
      const validPassword = await bcrypt.compare(
        password,
        user.dataValues.password
      );
      if (!validPassword) {
        return res
          .status(400)
          .send({ status: 400, message: "Invalid username or password" });
      }

      const data = await genToken({
        id: user.dataValues.id,
        username: user.dataValues.username,
        email: user.dataValues.email,
        isAdmin: user.dataValues.isAdmin,
        isProUser: user.dataValues.isAdmin.isProUser
      });

      return res.status(200).send({
        status: 200,
        message: "User is successfully logged in",
        token: data
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}

export default AuthController;
