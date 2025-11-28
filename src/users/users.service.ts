import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user-schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersModule } from './users.module';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(input: CreateUserDto.Input): Promise<CreateUserDto.Output> {
    const createdUser = new this.userModel(input);
    const savedUser = await createdUser.save();

    return {
      id: savedUser._id.toString(),
      email: savedUser.email,
      name: savedUser.name,
      createdAt: savedUser.createdAt,
    };
  }
  async getAllUser():Promise<CreateUserDto.Output[]>{
 const users = await this.userModel.find().exec();
    return users.map((user) =>({
        id:user._id.toString(),
        email:user.email,
        name:user.name,
        createdAt:user.createdAt
    }))
  }
}
