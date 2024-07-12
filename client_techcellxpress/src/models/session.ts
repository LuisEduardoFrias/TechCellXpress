//

export default class Session {
  constructor(user: string, email: string, expire: string) {
    this.user = user;
    this.email = email;
    this.expire = expire;
  }
}