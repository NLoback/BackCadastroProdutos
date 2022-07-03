import { AppDataSource } from "../../data-source";
import Product from "../../entity/Product";


export class GetAllCategoryService {
  async execute() {
    const repoProduct = AppDataSource.getRepository(Product);

    const products = await repoProduct.find();

    return products;

  }
}