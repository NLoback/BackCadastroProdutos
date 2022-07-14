import { Request, response, Response } from "express";
import { CreateProductService } from "../services/Products/CreateProductServices";
import { DeleteProductService } from "../services/Products/DeleteProductServices";
import { GetAllCategoryService } from "../services/Products/GetAllProductServices";
import { UpdateProductService } from "../services/Products/UpdateProductServices";


class ProductController {
  show(req: Request, res: Response) {
    return res.send({ userId: req.userId });/*verifica se o Id foi armazenado corretamente*/
  }

  async create(req: Request, res: Response) {

    /* pega os dados da requisão que vem do front e desestrutura */

    const product = await CreateProductService.execute(req.body); /* chama o metodo execute do service */
    console.log('Produto criado com sucesso');
    return res.json({
      product: product,
      success: "User created successfully"

    });
  }

  async delete(req: Request, res: Response) {

    const { id } = req.params;

    const service = new DeleteProductService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.status(200).json('Produto excluido com sucesso');
  }


  async index(req: Request, res: Response) {

    const service = new GetAllCategoryService();

    const allProduct = await service.execute();

    return res.json(allProduct);
  }

  /* verificar depois se esta correto */
  async update(req: Request, res: Response) {

    const { id } = req.params;


    const service = new UpdateProductService();

    await service.execute(req.body, id);

    console.log('produto atualizado com sucesso');

    return res.status(200).json('Produto Atualizado com sucesso');

  }

}

export default new ProductController();
