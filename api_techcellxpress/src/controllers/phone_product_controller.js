import { insert, select, selectBy, selectById, update as udt, remove as rv } from '../repositories/phone_product_repository.js';
import { insert as capacityInsert } from '../repositories/capacity_repository.js';
import Phone from '../../../cross_techcellxpress/models/phone_model.mjs';
import PhoneDto from '../../../cross_techcellxpress/dtos/phone_dto.mjs';

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

    if (data === 0)
      return { error: null, data }

    return { error: 'default error', data: null }
  }
}