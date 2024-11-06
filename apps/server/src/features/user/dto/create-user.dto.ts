import { Prisma } from '@prisma/client';
import { $Enums } from '@prisma/client';
import { IsString, IsEnum, IsOptional } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsString()
  username: string;

  @IsOptional()
  @IsEnum($Enums.UserRole)
  role?: $Enums.UserRole;
}
