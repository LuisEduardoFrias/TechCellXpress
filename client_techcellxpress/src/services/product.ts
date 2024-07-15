//
import Fetch, { Method, DataFetch } from "../helpers/fetch"
import { product } from '../helpers/api_router'

class Product {
  async get(token) {
    const datafetch: DataFetch = {
      url: product.get,
      method: Method.GET,
      token: token,
    }

    return await Fetch(datafetch);
  }
  //
  async getById(id, token) {
    const datafetch: DataFetch = {
      url: product.getById.replace('{id}', id),
      method: Method.GET,
      token: token,
    }

    return await Fetch(datafetch);
  }
  //
  async post(product, token) {

    const datafetch: DataFetch = {
      url: product.post,
      method: Method.POST,
      body: product,
      token: token,
    }

    return await Fetch(datafetch);
  }
  //
  async put(id, product, token) {
    const datafetch: DataFetch = {
      url: product.put.replace('{id}', id),
      method: Method.PUT,
      body: product,
      token: token,
    }

    return await Fetch(datafetch);
  }
  //
  async delete(id, token) {
    const datafetch: DataFetch = {
      url: product.delete.replace('{id}', id),
      method: Method.DELETE,
      token: token,
    }

    return await Fetch(datafetch);
  }
}

export default new Product();