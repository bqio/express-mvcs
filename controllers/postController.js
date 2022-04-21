import PostService from "../services/postService.js";
import ApiError from "../utils/apiError.js";

class PostController {
  constructor() {}

  getAll(req, res, next) {
    res.json(PostService.getAll());
  }

  create(req, res, next) {
    const { title, body } = req.body;
    const user = req.user;

    if (!title || !body) {
      return next(ApiError.BadRequest());
    }

    const post = PostService.create(title, body, user.id);

    res.send(post);
  }

  update(req, res, next) {
    const { id, title, body } = req.body;
    const user = req.user;

    if (!id || !title || !body) {
      return next(ApiError.BadRequest());
    }

    const post = PostService.update(id, title, body, user.id);

    switch (post) {
      case -1:
        return next(ApiError.NotFound());
      case 0:
        return next(ApiError.Forbidden());
      default:
        res.json(post);
    }
  }
}

export default new PostController();
