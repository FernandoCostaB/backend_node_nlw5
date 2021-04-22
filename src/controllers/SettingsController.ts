import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";


class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;
    const settingsServices = new SettingsService();
    const settings = await settingsServices.create({ chat, username });
    return response.json(settings);
  }
}

export { SettingsController }