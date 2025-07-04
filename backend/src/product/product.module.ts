import { Module } from '@nestjs/common';
import { ProductService } from './service/product.service';
import { ProductController } from './controller/product.controller';
import { app, analyticsPromise } from '../config/firebase.config';

@Module({
  providers: [
    ProductService,
    {
      provide: 'FIREBASE_APP',
      useValue: app,
    },
    {
      provide: 'FIREBASE_ANALYTICS',
      useValue: analyticsPromise,
    },
  ],
  controllers: [ProductController],
  exports: ['FIREBASE_APP', 'FIREBASE_ANALYTICS'],
})
export class ProductModule {}
