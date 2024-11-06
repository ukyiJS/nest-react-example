import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import type { User } from '@prisma/client';
import { $Enums } from '@prisma/client';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import type { CreateUserDto } from './dto/create-user.dto.js';
import type { UpdateUserDto } from './dto/update-user.dto.js';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            createUser: vitest.fn(),
            getUsers: vitest.fn(),
            getUserById: vitest.fn(),
            updateUser: vitest.fn(),
            deleteUser: vitest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userDto: CreateUserDto = {
        role: $Enums.UserRole.USER,
        username: 'john_doe',
      };
      const createdUser = {
        id: '1',
        ...userDto,
      } as User;

      vitest.spyOn(service, 'createUser').mockResolvedValueOnce(createdUser);

      const result = await controller.createUser(userDto);

      expect(result).toEqual(createdUser);
    });
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const users = [{
        id: '1',
        username: 'john_doe',
        role: $Enums.UserRole.USER,
      }] as User[];

      vitest.spyOn(service, 'getUsers').mockResolvedValueOnce(users);

      const result = await controller.getUsers();

      expect(result).toEqual(users);
    });
  });

  describe('getUserById', () => {
    it('should return a single user', async () => {
      const user = {
        id: '1',
        username: 'John Doe',
        role: $Enums.UserRole.USER,
      } as User;

      vitest.spyOn(service, 'getUserById').mockResolvedValueOnce(user);

      const result = await controller.getUserById('1');

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

      vitest.spyOn(service, 'updateUser').mockResolvedValueOnce(updatedUser);

      const result = await controller.updateUser('1', updateUserDto);

      expect(result).toEqual(updatedUser);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      const deletedUser = {
        id: '1',
        username: 'John Doe',
        role: $Enums.UserRole.USER,
      } as User;

      vitest.spyOn(service, 'deleteUser').mockResolvedValueOnce(deletedUser);

      const result = await controller.deleteUser('1');

      expect(result).toEqual(deletedUser);
    });
  });
});
