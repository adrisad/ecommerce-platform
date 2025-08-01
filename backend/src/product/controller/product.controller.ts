import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() body: any) {
    try {
      const id = await this.productService.createProduct(body);
      return { id, message: 'Producto creado correctamente' };
    } catch (error) {
      throw new HttpException(
        'Error al crear el producto',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    return await this.productService.getAllProducts();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.productService.getProductById(id);
    } catch (error) {
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      await this.productService.updateProduct(id, body);
      return { message: 'Producto actualizado correctamente' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.productService.deleteProduct(id);
      return { message: 'Producto eliminado correctamente' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
