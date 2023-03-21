import { IsNotEmpty, Min } from 'class-validator';

export class CreateRoleDto {
  @Min(1)
  readonly id: number;

  @IsNotEmpty()
  readonly description: string;
}
