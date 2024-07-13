//
import BaseModel from '../models/base_model.js';

export default class UserDto extends BaseModel {
  constructor(name, lastName, email, user) {
    super();
    this.fullName`${name} ${lastName}`
    this.email = email;
    this.user = user;
  }
}