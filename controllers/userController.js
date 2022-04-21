import UserService from "../services/userService.js";

class UserController {
  constructor() {}

  getAll(req, res, next) {
    res.json(UserService.getAll());
  }
}

export default new UserController();
