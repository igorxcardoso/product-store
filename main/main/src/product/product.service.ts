import { Product, ProductDocument } from './product.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name) private readonly productModule: Model<ProductDocument>
  ) {}

  async all() {
    return this.productModule.find().exec();
  }
}
