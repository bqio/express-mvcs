import httpErrors from "./httpErrors.js";

export default class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }

  static BadRequest(message = httpErrors.BadRequest.message) {
    return new ApiError(message, httpErrors.BadRequest.statusCode);
  }

  static Unauthorized(message = httpErrors.Unauthorized.message) {
    return new ApiError(message, httpErrors.Unauthorized.statusCode);
  }

  static Forbidden(message = httpErrors.Forbidden.message) {
    return new ApiError(message, httpErrors.Forbidden.statusCode);
  }

  static NotFound(message = httpErrors.NotFound.message) {
    return new ApiError(message, httpErrors.NotFound.statusCode);
  }
}
