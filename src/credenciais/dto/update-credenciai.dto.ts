import { PartialType } from '@nestjs/mapped-types';
import { CreateCredenciaiDto } from './create-credenciai.dto';

export class UpdateCredenciaiDto extends PartialType(CreateCredenciaiDto) {}
