import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../commons/entities/BaseEntity';
import { User } from 'src/commons/user/entities/user.entity';
import { Auth } from 'src/commons/decorators/auth.decorator';

@Entity('message')
export class Message extends BaseEntity {
  @ManyToOne((type) => User, (user) => user.messages)
  user: User;

  @Column({ nullable: false })
  message: string;

  @Column({ name: 'is_photo', default: false })
  isPhoto: boolean;

  @Column({ nullable: true })
  photo: string;
}
