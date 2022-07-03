import Product from "../../entity/Product";
import { AppDataSource } from "../../data-source";


export class DeleteProductService {
  async execute(id: string) {
    const repoProduct = AppDataSource.getRepository(Product)

    const product = await repoProduct.findOne({ where: { id } });

    if (!product) {
      return new Error("Produto não encontrado");
    }

    await repoProduct.delete({ id })


  }

}