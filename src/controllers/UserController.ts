import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';

import User from '../entity/User';

class UserController {
  index(req: Request, res: Response) {
    return res.send({ userId: req.userId });/*verifica se o Id foi armazenado corretamente*/
  }



  async store(req: Request, res: Response) {
    const repository = AppDataSource.getRepository(User);
    const { email, password, firstName, lastName } = req.body;


    /*Verifca se o email ja foi utilizado caso esteja em uso retornara erro */
    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return res.sendStatus(409).json({ error: 'E-mail já cadastrado' });
    }

    const user = repository.create({ email, password, firstName, lastName });
    await repository.save(user);

    return res.json(user).json({ success: 'Usuário criado com sucesso!' });
  }
}

export default new UserController();
