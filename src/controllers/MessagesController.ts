import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {

  async create(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body;
    const messagesServices = new MessagesService();
    try {
      const message = await messagesServices.create({ admin_id, text, user_id });
      return response.json(message);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  async showByUser(request: Request, response: Response) {
    const { user_id } = request.params;

    const messagesServices = new MessagesService();
    const list = await messagesServices.listByUser(user_id);

    return response.json(list);
  }
}

export { MessagesController }