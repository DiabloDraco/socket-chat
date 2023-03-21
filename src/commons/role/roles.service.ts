import { Injectable } from '@nestjs/common';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { Auth } from 'src/commons/decorators/auth.decorator';

@Auth()
@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  find() {
    return this.roleRepository.find();
  }

  findByID(id: number) {
    return this.roleRepository.findOneBy({
      id: id,
    });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update(id, {
      description: updateRoleDto.description,
    });
  }
}
