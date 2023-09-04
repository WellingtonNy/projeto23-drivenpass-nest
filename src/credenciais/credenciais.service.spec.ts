import { Test, TestingModule } from '@nestjs/testing';
import { CredenciaisService } from './credenciais.service';

describe('CredenciaisService', () => {
  let service: CredenciaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CredenciaisService],
    }).compile();

    service = module.get<CredenciaisService>(CredenciaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
