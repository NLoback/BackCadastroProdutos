import User from '../../entity/User';
import { AppDataSource } from '../../data-source';

type UserRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

/* verifica se o e-mail ja esta sendo utilizado, se o mesmo for existente retorna erro caso contrario 
cria novo usario */
/* regra de negocio dentro de service */
/* service tem como objetivo ter uma responsabilidade apenas, definida pela classe criada que recebe o método (funcoes)
execute => metodo que sera executado */


export class CreateUserService {

  static async execute({ firstName, lastName, email, password }: UserRequest): Promise<User | Error> {
    const repo = AppDataSource.getRepository(User);
    //SELECT * FROM USER WHERE EMAIL = "EMAIL" LIMIT 1
    const emailValidator = await repo.findOne({ where: { email } });

    if (emailValidator) { /*se o email ja existir retorna erro*/
      return new Error('User already exists');
    }

    const user = repo.create({ /*cria um novo usuario*/
      firstName,
      lastName,
      email,
      password
    })

    await repo.save(user); /*salva o usuario no banco*/

    return user;
  }

}


