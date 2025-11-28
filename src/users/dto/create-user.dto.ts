import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CreateUserDto {
  export class Input {
    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'strongPassword123' })
    @IsNotEmpty()
    @MinLength(4)
    password: string;

    @ApiProperty({ example: 'John Doe', required: false })
    @IsOptional()
    name?: string;
  }

  export class Output {
    @ApiProperty({ example: '64d2a1f4b4d2f1234567890a' })
    id: string;

    @ApiProperty({ example: 'user@example.com' })
    email: string;

    @ApiProperty({ example: 'John Doe', required: false })
    name?: string;

    @ApiProperty({ example: '2025-11-28T12:00:00.000Z' })
    createdAt?: Date;
  }
}
