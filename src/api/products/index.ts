import { endpoints } from '@/api/endpoints';
import { Instance } from '@/api/instance';

interface ProductConfig {
  baseURL?: string;
}

const config: ProductConfig = {
  baseURL: endpoints.products,
};

class ProductApi extends Instance {
  constructor(config: ProductConfig) {
    super(config);
  }

  getProducts = () => this.get();
}

export const productApi = new ProductApi(config);
