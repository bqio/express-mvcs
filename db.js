class Database {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  addUser(user) {
    const userObj = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(userObj);
    return userObj;
  }
}

export default new Database();
