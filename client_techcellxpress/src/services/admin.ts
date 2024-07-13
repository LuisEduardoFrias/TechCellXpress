//
import Fetch, { Method, DataFetch } from '../helpers/fetch'
import { admin } from '../helpers/api_router'

class Admin {
  async loadProducts(phones, token) {
    const datafetch: DataFetch = {
      url: admin.loadProducts,
      method: Method.POST,
      body: phones,
      token: token,
    }

    const { error, data } = await Fetch(datafetch);
  }
  //
  async removeAll(token) {
    const datafetch: DataFetch = {
      url: admin.removeAll,
      method: Method.DELETE,
      token: token,
    }

    const { error, data } = await Fetch(datafetch);
  }
}

export default new Admin();