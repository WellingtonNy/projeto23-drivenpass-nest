import { Injectable } from '@nestjs/common';
import { CreateCredenciaiDto } from './dto/create-credenciai.dto';
import { UpdateCredenciaiDto } from './dto/update-credenciai.dto';

@Injectable()
export class CredenciaisService {
  create(createCredenciaiDto: CreateCredenciaiDto) {
    return 'This action adds a new credenciai';
  }

  findAll() {
    return `This action returns all credenciais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} credenciai`;
  }

  update(id: number, updateCredenciaiDto: UpdateCredenciaiDto) {
    return `This action updates a #${id} credenciai`;
  }

  remove(id: number) {
    return `This action removes a #${id} credenciai`;
  }
}
