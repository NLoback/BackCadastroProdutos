import { AppDataSource } from "../../data-source";
import User from "../../entity/User";

/*  */

export class GetAllUsersService {
  async execute() {
    const repo = AppDataSource.getRepository(User);

    const categories = await repo.find();

    return categories;
  }
}