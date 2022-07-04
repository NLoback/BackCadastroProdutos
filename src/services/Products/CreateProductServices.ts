import Product from '../../entity/Product';
import { AppDataSource } from '../../data-source';

type ProductRequest = {
  nome: string;
  fabricacao: Date;
  perecivel: boolean;
  preco: number;
  validade: Date;
}

export class CreateProductService {

  static async execute(data: ProductRequest): Promise<Product> {
    const repoProduct = AppDataSource.getRepository(Product);

    if (data.fabricacao > data.validade) {
      throw new Error('Data de fabricação não pode ser maior que data de validade');
    }

    const product = repoProduct.create(data)

    await repoProduct.save(product); /*salva o usuario no banco*/

    return product;
  }
}
