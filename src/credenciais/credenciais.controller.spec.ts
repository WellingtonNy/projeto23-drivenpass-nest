import { Test, TestingModule } from '@nestjs/testing';
import { CredenciaisController } from './credenciais.controller';
import { CredenciaisService } from './credenciais.service';

describe('CredenciaisController', () => {
  let controller: CredenciaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CredenciaisController],
      providers: [CredenciaisService],
    }).compile();

    controller = module.get<CredenciaisController>(CredenciaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
