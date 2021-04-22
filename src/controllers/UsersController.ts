import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UserController {
  async create(request: Request, response: Response) {
    const { email } = request.body;
    const usersService = new UsersService();
    try {
      const user = await usersService.create(email);
      return response.json(user);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
}

export { UserController }