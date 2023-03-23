import { IsBoolean, IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/commons/user/entities/user.entity';
export class CreateMessageDto {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsBoolean()
  isPhoto: boolean;

  photo: string;
}
