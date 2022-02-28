import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductController {

  // GET   /api/products
  @Get()
  all() {
    return "All product";
  }
}
