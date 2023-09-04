import { Body, Delete, Get, Path, Post, Patch, Route, Tags } from "tsoa";
import { IUser } from "./interfaces/user.interface";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "./user.service";
import { User } from "./user.model";

@Tags("User")
@Route("user")
export default class UserController {
  @Post("/")
  public addUser(@Body() body: IUser): Promise<User> {
    return createUser(body);
  }

  @Get("/:userId")
  public getUser(@Path() userId: string): Promise<User | null> {
    return getUser(userId);
  }

  @Get("/")
  public getUsers(): Promise<User[]> {
    return getAllUsers();
  }

  @Patch("/:userId")
  public async updateUser(
    @Path() userId: string,
    @Body() body: Partial<IUser>,
  ): Promise<string> {
    return updateUser(userId, body);
  }

  @Delete("/:userId")
  public deleteUser(@Path() userId: string): Promise<string> {
    return deleteUser(userId);
  }
}
