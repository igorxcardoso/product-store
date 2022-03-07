import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { title } from 'process';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {

  constructor(private productService: ProductService,
              @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy) { }

  // GET   /api/products
  @Get()
  async all() {
    this.client.emit('hello', 'hello from RabbitMQ!!');
    return this.productService.all()
  }

  // POST   /api/products
  @Post()
  async create(
    @Body('title') title: string,
    @Body('image') image: string) {

      return this.productService.create({
        title,
        image
      })
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.productService.get(id);
  }


  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('image') image:string
  ) {
    return this.productService.update(
      id,
      {
        title,
        image
      }
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }

}
