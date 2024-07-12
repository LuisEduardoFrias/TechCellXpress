//
import crypto from 'crypto';

export default class User {
  constructor(user) {
    this.id = crypto.randomUUID();
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
    this.user = user.user;
    this.password = user.password;
    //this.userType= userType;
  }
}