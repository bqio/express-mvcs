import Database from "../db.js";

class PostService {
  constructor() {}

  getAll() {
    return Database.getPosts();
  }

  getById(id) {
    for (let post of Database.getPosts()) {
      if (post.id === id) {
        return post;
      }
    }
    return null;
  }

  create(title, body, userId) {
    return Database.addPost({
      title,
      body,
      userId,
    });
  }

  update(id, title, body, userId) {
    const post = this.getById(id);

    if (!post) {
      return -1;
    }

    if (userId !== post.userId) {
      return 0;
    }

    post.title = title;
    post.body = body;
    return post;
  }
}

export default new PostService();
