import jwt from "jsonwebtoken";

class TokenService {
  constructor() {}

  generate(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.TOKEN_EXPIRES || "1h",
    });
  }

  verify(token) {
    try {
      return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      return null;
    }
  }
}

export default new TokenService();
