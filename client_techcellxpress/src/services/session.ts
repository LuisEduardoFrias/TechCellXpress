//
import Fetch, { Method, DataFetch } from "../helpers/fetch"
import { session } from '../helpers/api_router'

class Session {
  async logIn(user) {
    const datafetch: DataFetch = {
      url: session.logIn,
      method: Method.POST,
      body: user,
    }

    return await Fetch(datafetch);
  }
  //
  async logOut(session_, token) {
    const datafetch: DataFetch = {
      url: session.logOut,
      method: Method.POST,
      body: session_,
      token: token,
    }

    console.log("logOut: " + JSON.stringify(datafetch))
    return await Fetch(datafetch);
  }
  //
  async register(user) {
    const datafetch: DataFetch = {
      url: session.register,
      method: Method.POST,
      body: user,
    }

    const { error, data } = await Fetch(datafetch);

    if (error)
      return { error, data: null }

    return { error: null, data: "Succes" }
  }
}

export default new Session();