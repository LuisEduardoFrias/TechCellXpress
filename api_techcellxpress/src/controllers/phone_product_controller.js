import { insert, select, selectBy, selectById, update as udt, remove as rv } from '../repositories/phone_product_repository.js';
import { insert as capacityInsert } from '../repositories/capacity_repository.js';
import Phone from '../models/phone_model.js';
import PhoneDto from '../dtos/phone_dto.js';

export default class PhoneProduct {
  static async create(newPhone) {

    const findPhone = await selectBy(newPhone.imei);

    if (!findPhone) {
      const _phone = new Phone(newPhone);

      const capacity = await capacityInsert(_phone.capacity);
      _phone.capacity = capacity.id;
      const phone = await insert(_phone);
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

    if (data)
      return { error: null, data }

    return { error: 'default error', data: null }
  }
  //
  static async update(id, update) {
    const data = await udt(id, update);

    if (data)
      return { error: null, data }

    return { error: 'default error', data: null }
  }
  //
  static async remove(id) {
    const data = await rv(id);

    if (data ===0)
      return { error: null, data }

    return { error: 'default error', data: null }
  }
}