//
import BaseModel from '../models/base_model.mjs';

export default class UserDto extends BaseModel {
  #lastName;
  #name;
  constructor(name, lastName, email, user) {
    super();
    this.fullName = `${name} ${lastName}`
    this.email = email;
    this.user = user;
  }
}