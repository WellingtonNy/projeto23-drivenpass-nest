import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CredenciaisService } from './credenciais.service';
import { CreateCredenciaiDto } from './dto/create-credenciai.dto';
import { UpdateCredenciaiDto } from './dto/update-credenciai.dto';

@Controller('credenciais')
export class CredenciaisController {
  constructor(private readonly credenciaisService: CredenciaisService) {}

  @Post()
  create(@Body() createCredenciaiDto: CreateCredenciaiDto) {
    return this.credenciaisService.create(createCredenciaiDto);
  }

  @Get()
  findAll() {
    return this.credenciaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.credenciaisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCredenciaiDto: UpdateCredenciaiDto) {
    return this.credenciaisService.update(+id, updateCredenciaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.credenciaisService.remove(+id);
  }
}
