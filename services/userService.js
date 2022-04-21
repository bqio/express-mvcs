import Database from "../db.js";

class UserService {
  constructor() {}

  findByUsername(username) {
    for (let user of Database.getUsers()) {
      if (user.username === username) {
        return user;
      }
    }
    return null;
  }

  create(username, password) {
    return Database.addUser({
      username,
      password,
    });
  }

  getAll() {
    return Database.getUsers();
  }
}

export default new UserService();
