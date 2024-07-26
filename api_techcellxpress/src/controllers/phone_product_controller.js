import { insert, select, selectBy, selectById, update as udtPhone, remove as rv } from '../repositories/phone_product_repository.js';
import { insert as capacityInsert, selectById as capacityById, update as udtCapacity } from '../repositories/capacity_repository.js';
import Phone from '../models/phone_model.js';
import PhoneDto from '../dtos/phone_dto.js';

export default class PhoneProduct {
  static async create(newPhone) {
    const findPhone = await selectBy(newPhone.imei);

    if (!findPhone) {
      const capacity = await capacityInsert(newPhone.capacity);
      newPhone.capacity = capacity.id;

      const phone = await insert(newPhone);
      return { error: null, data: new PhoneDto(phone) };
    }

    return { error: 'default error', data: null };
  }
  //
  static async read() {
    const data = await select();

    if (data)
      return { error: null, data }

    return { error: 'default error', data: null }
  }
  //
  static async readById(id) {
    const data = await selectById(id);

    if (data) {
      const capacity = await capacityById(data.dataValues.capacity);

      if (!capacity) {
        return { error: 'default error', data: null }
      }

      data.capacity = capacity;
      return { error: null, data }
    }

    return { error: 'default error', data: null }
  }
  //
  static async update(id, update) {

    const capacity = update.capacity;

    const cap = await udtCapacity(capacity.id, capacity);
    console.log("controller: ", cap)
    if (cap.length > 0) {
      update.capacity = capacity.id;
      const data = await udtPhone(id, update);

      if (data.length > 0)
        return { error: null, data };
    }

    return { error: 'default error', data: null };
  }
  //
  static async remove(id) {
    const data = await rv(id);

    if (data === 0)
      return { error: null, data }

    return { error: 'default error', data: null }
  }
}