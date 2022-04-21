class Database {
  constructor() {
    this.users = [];
    this.posts = [];
  }

  getUsers() {
    return this.users;
  }

  getPosts() {
    return this.posts;
  }

  addUser(user) {
    const userObj = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(userObj);
    return userObj;
  }

  addPost(post) {
    const postObj = {
      id: this.posts.length + 1,
      ...post,
    };
    this.posts.push(postObj);
    return postObj;
  }
}

export default new Database();
