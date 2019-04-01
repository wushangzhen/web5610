
export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;

  constructor(username, password) {
    // this._id = _id;
    this.username = username;
    this.password = password;
    // this.firstName = username;
    // this.lastName = username;
    // this.email = username + '@gmail.com';
  }
}
