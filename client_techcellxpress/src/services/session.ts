//
import Fetch, { Method, DataFetch } from "../helpers/fetch"
import { session } from '../helpers/api_router'

class Session {
  async logIn(user, token) {
    const datafetch: DataFetch = {
      url: session.logIn,
      method: Method.POST,
      body: user,
      token: token,
    }

    const { error, data } = await Fetch(datafetch);
  }
  //
  async logOut(session, token) {
    const datafetch: DataFetch = {
      url: session.logOut,
      method: Method.POST,
      body: session,
      token: token,
    }

    const { error, data } = await Fetch(datafetch);
  }
  //
  async register(user, token) {
    const datafetch: DataFetch = {
      url: session.register,
      method: Method.POST,
      body: user,
      token: token,
    }

    const { error, data } = await Fetch(datafetch);
  }
}

export default new Session();