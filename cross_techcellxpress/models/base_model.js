//
import crypto from 'crypto';

export default class BaseModel {
  constructor() {
    this.id = crypto.randomUUID();
  }

  static mapper(obj) {
    const instance = new this();
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && key in instance) {
        instance[key] = obj[key];
      }
    }
    return instance;
  }
}