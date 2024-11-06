import { PrismaService } from '@/shared/libs/prisma/prisma.service.js';
import { Test, TestingModule } from '@nestjs/testing';
import { $Enums, User } from '@prisma/client';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserService } from './user.service.js';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      const userDto: CreateUserDto = {
        username: 'John Doe',
        role: $Enums.UserRole.USER,
      };
      const createdUser = {
        id: '1',
        ...userDto,
      } as User;

      vitest.spyOn(prisma.user, 'create').mockResolvedValueOnce(createdUser);

      const result = await service.createUser(userDto);

      expect(result).toEqual(createdUser);
    });
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const users = [{
        id: '1',
        username: 'John Doe',
        role: $Enums.UserRole.USER,
      }] as User[];

      vitest.spyOn(prisma.user, 'findMany').mockResolvedValueOnce(users);

      const result = await service.getUsers();

      expect(result).toEqual(users);
    });
  });

  describe('getUserById', () => {
    it('should return a user by ID', async () => {
      const user = {
        id: '1',
        username: 'John Doe',
        role: $Enums.UserRole.USER,
      } as User;

      vitest.spyOn(prisma.user, 'findUnique').mockResolvedValueOnce(user);

      const result = await service.getUserById('1');

      expect(result).toEqual(user);
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const updateUserDto: UpdateUserDto = {
        username: 'Jane Doe',
        role: $Enums.UserRole.USER,
      };
      const updatedUser = {
        id: '1',
        username: 'Jane Doe',
        role: $Enums.UserRole.USER,
      } as User;

      vitest.spyOn(prisma.user, 'update').mockResolvedValueOnce(updatedUser);

      const result = await service.updateUser('1', updateUserDto);

      expect(result).toEqual(updatedUser);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      const deletedUser = {
        id: '1',
        username: 'John Doe',
      } as User;

      vitest.spyOn(prisma.user, 'delete').mockResolvedValueOnce(deletedUser);

      const result = await service.deleteUser('1');

      expect(result).toEqual(deletedUser);
    });
  });
});
