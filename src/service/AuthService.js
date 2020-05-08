import database from "../models";

class UserService {
  static async addUser(newUser, next) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
    next();
  }

  static async findUser(username, next) {
    try {
      return await database.User.findOne({
        where: { username: username }
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async findUserById(id, next) {
    try {
      return await database.User.findOne({
        where: { id: id }
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  //   static async getUser(id, next) {
  //     try {
  //       return await database.User.findOne({
  //         where: {
  //           id: id
  //         }
  //       });
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  //   static async updateUser(userData, next) {
  //     const { email, newPassword, id } = userData;
  //     try {
  //       return await database.User.update(
  //         {
  //           email: email,
  //           password: newPassword
  //         },
  //         { where: { id: id }, returning: true }
  //       );
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
}

export default UserService;
