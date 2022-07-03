import { Request, Response } from 'express';
import { CreateUserService } from '../services/Users/CreateUserService';


class UserController {
  show(req: Request, res: Response) {
    return res.send({ userId: req.userId });/*verifica se o Id foi armazenado corretamente*/
  }

  async create(req: Request, res: Response) {

    const { email, password, firstName, lastName } = req.body; /* pega os dados da requisição que vem do front e desestrutura */

    const user = await CreateUserService.execute({ email, password, firstName, lastName }); /* chama o metodo execute do service */

    return res.json({
      user: user,
      success: "User created successfully"
    });
  }
}
export default new UserController();
