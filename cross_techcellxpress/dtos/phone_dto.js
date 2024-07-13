//
import BaseModel from '../models/bose_model.js';

export class CapacityDto extends BaseModel {
  constructor(rom, ramMemory, processor, processorSpeed) {
    super();
    this.rom = rom;
    this.ramMemory = ramMemory;
    this.processor = processor;
    this.processorSpeed = processorSpeed;
  }
}

export class PhoneDto extends BaseModel {
  constructor(imgUrl, brand, model, color) {
    super();
    this.imgUrl = imgUrl;
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
}

export default class PhoneFullDto extends BaseModel {
  constructor(imgUrl, brand, model, color, capacity, releaseDate) {
    super();
    this.imgUrl = imgUrl;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.capacity = capacity;
    this.releaseDate = releaseDate;
    this.isRemoved = false;
  }
}
