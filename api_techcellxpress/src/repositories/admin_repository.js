//
import { Phone } from '../models/models_db.js';
import { Capacity } from '../models/models_db.js';

export async function loadProducts(phones) {
  return await Phone.bulkCreate(phones);
}

export async function allRemove() {
  let result = await Capacity.destroy({ where: {} });

  if (result === 0)
    result = await Phone.destroy({ where: {} });

  return result;
}