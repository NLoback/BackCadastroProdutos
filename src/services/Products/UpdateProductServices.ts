import Product from "../../entity/Product";
import { AppDataSource } from "../../data-source";

/* type funciona como um interface */

type CategoryUpdateRequest = {
  nome: string;
  fabricacao: Date;
  perecivel: boolean;
  preco: number;
  validade: Date;
}

export class UpdateProductService {
  /* CatergoryUpdateRequest refatorado para data */
  async execute(data: CategoryUpdateRequest, id: string): Promise<void> {
    await AppDataSource.getRepository(Product).update(id, data);
  }
}