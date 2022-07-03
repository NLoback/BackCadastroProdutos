import Product from "../../entity/Product";
import { AppDataSource } from "../../data-source";

/* type funciona como um interface */

type CategoryUpdateRequest = {
  id: string,
  produto: string;
  preco: number;
  qtd: number;
  categoria: string;
  compra: Date;
  validade: Date;
}

export class UpdateProductService {
  /* CatergoryUpdateRequest refatorado para data */
  async execute(data: CategoryUpdateRequest) {

    await AppDataSource.getRepository(Product).update(data.id, data);

  }
}