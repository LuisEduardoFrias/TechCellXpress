//
import { login, logout, register, selectBy } from '../repositories/session_repository.js';
import User from '../models/user_model.js';
import UserDto from '../dtos/user_dto.js';

export default class RegisterLogin {

  static async login(user, password) {
    const result = await login(user);

    //compare passwords encrypted using bcrypt
    //return { error: "Incorrect password", data: null };

    if (!result)
      return { error: "user not found", data: null };

    return { error: null, data: new UserDto(result) };
  }
  //
  static async logout(user) {

    const result = await logout(user.id);

    if (!result)
      return { error: 'user not found', data: null };

    return { error: null, data: result };
  }
  //
  static async register(_register) {
    //encript password, Bcrypt

    const findUser = await selectBy(_register.email, _register.user);

    if (findUser)
      return { error: "The user exists.", data: null };

    const result = await register(new User(_register));

    return { error: null, data: new UserDto(result) };
  }
}