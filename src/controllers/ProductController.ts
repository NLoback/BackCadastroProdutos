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

    const {
      produto,
      categoria,
      compra,
      preco,
      qtd,
      validade
    } = req.body; /* pega os dados da requisão que vem do front e desestrutura */

    const product = await CreateProductService.execute({
      produto,
      categoria,
      compra,
      preco,
      qtd,
      validade
    }); /* chama o metodo execute do service */

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
    return response.json(200).end();
  }


  async index(req: Request, res: Response) {

    const service = new GetAllCategoryService();

    const allProduct = await service.execute();

    return res.json(allProduct);
  }

  /* verificar depois se esta correto */
  async update(req: Request, res: Response) {

    const { id } = req.params;

    const { produto, categoria, compra, preco, qtd, validade } = req.body;

    const service = new UpdateProductService();

    const result = await service.execute({
      id,
      produto,
      categoria,
      compra,
      preco,
      qtd,
      validade
    });

    return response.json(200).end();
  }
}

export default new ProductController();