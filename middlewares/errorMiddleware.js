import ApiError from "../utils/apiError.js";
import httpErrors from "../utils/httpErrors.js";

export default function errorMiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      error: {
        message: err.message,
        statusCode: err.statusCode,
      },
    });
  }
  return res.status(httpErrors.InternalServerError.statusCode).json({
    error: {
      message: httpErrors.InternalServerError.message,
      statusCode: httpErrors.InternalServerError.statusCode,
    },
  });
}
