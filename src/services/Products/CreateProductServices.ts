import Product from '../../entity/Product';
import { AppDataSource } from '../../data-source';

type ProductRequest = {
  produto: string;
  preco: number;
  qtd: number;
  categoria: string;
  compra: Date;
  validade: Date;
}

export class CreateProductService {

  static async execute({ produto, preco, qtd, categoria, compra, validade }: ProductRequest): Promise<Product | Error> {
    const repoProduct = AppDataSource.getRepository(Product);

    const product = repoProduct.create({
      produto,
      preco,
      qtd,
      categoria,
      compra,
      validade
    })

    await repoProduct.save(product); /*salva o usuario no banco*/

    return product;

  }
}
