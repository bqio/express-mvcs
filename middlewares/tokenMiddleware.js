import TokenService from "../services/tokenService.js";
import ApiError from "../utils/apiError.js";

export default function tokenMiddleware(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    if (TokenService.verify(token)) {
      return next();
    }
  }
  return next(ApiError.Unauthorized());
}
