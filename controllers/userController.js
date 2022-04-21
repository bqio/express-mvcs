import UserService from "../services/userService.js";

class UserController {
  constructor() {}

  getAll(req, res, next) {
    console.log(req.user);
    res.json(UserService.getAll());
  }
}

export default new UserController();
