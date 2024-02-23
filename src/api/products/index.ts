import { endpoints } from '@/api/endpoints';
import { Instance } from '@/api/instance';

interface ProductConfig {
  baseURL?: string;
}

const config: ProductConfig = {
  baseURL: endpoints.base,
};

class ProductApi extends Instance {
  constructor(config: ProductConfig) {
    super(config);
  }

  getProducts = () => this.get(endpoints.products);

  getProductBrand = () => this.get(endpoints.brand);

  getProductCategory = () => this.get(endpoints.category);

  getKeyboardLanguage = () => this.get(endpoints.keyboardLanguage);

  getMemory = () => this.get(endpoints.memory);

  getStorage = () => this.get(endpoints.storage);

  getWarranty = () => this.get(endpoints.warranty);

  getTaxRule = () => this.get(endpoints.taxRule);

  getMinOrder = () => this.get(endpoints.minOrder);

  getWarrantyType = () => this.get(endpoints.warrantyType);

  createProduct = (params: any) => this.post(params);

  deleteProduct = (params: any) => this.delete(params);
}

export const productApi = new ProductApi(config);
