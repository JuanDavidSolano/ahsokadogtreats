import { Body, Delete, Get, Path, Post, Patch, Route, Tags } from "tsoa";
import { IClient } from "./interfaces/client.interface";
import {
  createClient,
  deleteClient,
  getAllClients,
  getClient,
  updateClient,
} from "./client.service";
import { Client } from "./client.model";

@Tags("Client")
@Route("client")
export default class ClientController {
  @Post("/")
  public addClient(@Body() body: IClient): Promise<Client> {
    return createClient(body);
  }

  @Get("/:clientId")
  public getClient(@Path() clientId: string): Promise<Client | null> {
    return getClient(clientId);
  }

  @Get("/")
  public getClients(): Promise<Client[]> {
    return getAllClients();
  }

  @Patch("/:clientId")
  public async updateClient(
    @Path() clientId: string,
    @Body() body: Partial<IClient>,
  ): Promise<string> {
    return updateClient(clientId, body);
  }

  @Delete("/:clientId")
  public deleteClient(@Path() clientId: string): Promise<string> {
    return deleteClient(clientId);
  }
}
