import ApiError from "../utils/apiError.js";
import UserService from "../services/userService.js";
import TokenService from "../services/tokenService.js";

class AuthController {
  constructor() {}

  signin(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
      return next(ApiError.BadRequest());
    }

    const user = UserService.findByUsername(username);

    if (user && user.password == password) {
      const token = TokenService.generate({ id: user.id });
      res.json({
        accessToken: token,
      });
    } else {
      return next(ApiError.Unauthorized());
    }
  }

  signup(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
      return next(ApiError.BadRequest());
    }

    const user = UserService.findByUsername(username);

    if (user) {
      return next(ApiError.BadRequest("User already exists."));
    } else {
      const user = UserService.create(username, password);
      const token = TokenService.generate({ id: user.id });
      res.json({
        accessToken: token,
      });
    }
  }
}

export default new AuthController();
