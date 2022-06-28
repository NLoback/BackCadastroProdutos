import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';

import User from '../entity/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = AppDataSource.getRepository(User);
    const { email, password, firstName, lastName } = req.body;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return res.sendStatus(401).json({ error: 'Usuário não encontrado' });

    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401).json({ error: 'Senha inválida' });
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });

    //@ts-ignore
    delete user.password;

    return res.json({
      user,
      token,
    });
  }
}

export default new AuthController();
