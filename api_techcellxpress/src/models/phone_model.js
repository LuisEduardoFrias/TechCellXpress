//
import crypto from 'crypto';

export class Capacity {
  constructor(capacity) {
    this.id = crypto.randomUUID();
    this.rom = capacity.rom;
    this.ramMemory = capacity.ramMemory;
    this.processor = capacity.processor;
  }
}

export default class Phone {
  constructor(phone) {
    this.id = crypto.randomUUID();
    this.imei = phone.imei;
    this.imgUrl = phone.imgUrl;
    this.brand = phone.brand;
    this.model = phone.model;
    this.color = phone.color;
    this.capacity = new Capacity(phone.capacity);
    this.releaseDate = phone.releaseDate;
    this.isRemoved = false;
  }
}