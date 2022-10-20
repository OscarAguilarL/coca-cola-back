import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { ProductsService } from 'src/products/products.service';
import fixtures from './fixtures/products';
import { ProductsResponse } from './interfaces/product-response.interface';

@Injectable()
export class SeedService {
  constructor(
    private readonly productService: ProductsService,
    private readonly http: AxiosAdapter,
  ) {}

  async runSeed() {
    await this.deleteTables();
    await this.insertProducts();

    return 'SEED EXECUTED';
  }

  private async deleteTables() {
    await this.productService.deleteAllProducts();
  }

  private async insertProducts() {
    const products: ProductsResponse[] = fixtures;

    const insertPromises = [];

    products.forEach((product) => {
      insertPromises.push(this.productService.create(product));
    });

    await Promise.all(insertPromises);
  }
}
