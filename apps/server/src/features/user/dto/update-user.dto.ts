import type { Prisma } from '@prisma/client';
import { $Enums } from '@prisma/client';
import { IsString, IsOptional, IsEnum } from 'class-validator';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEnum($Enums.UserRole)
  role?: $Enums.UserRole;
}
