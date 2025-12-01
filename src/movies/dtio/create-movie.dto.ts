import { IsNotEmpty, IsOptional, IsUrl, IsString, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export namespace CreateMovieDto {
  export class Input {
    @ApiProperty({ example: 'Inception' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 'A mind-bending thriller', required: false })
    @IsOptional()
    description?: string;

    @ApiProperty({ example: 'https://example.com/video.mp4' })
    @IsUrl()
    @IsNotEmpty()
    videoUrl: string;

    @ApiProperty({ example: 'https://example.com/poster.jpg', required: false })
    @IsOptional()
    @IsUrl()
    imageUrl?: string;

    @ApiProperty({ example: 'Sci-Fi', required: false })
    @IsOptional()
    @IsString()
    genre?: string;

    @ApiProperty({ example: 0, required: false })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(5)
    rating?: number;
  }

  export class Output {
    @ApiProperty({ example: '64d2a1f4b4d2f1234567890a' })
    id: string;

    @ApiProperty({ example: 'Inception' })
    title: string;

    @ApiProperty({ example: 'A mind-bending thriller', required: false })
    description?: string;

    @ApiProperty({ example: 'https://example.com/video.mp4' })
    videoUrl: string;

    @ApiProperty({ example: 'https://example.com/poster.jpg', required: false })
    imageUrl?: string;

    @ApiProperty({ example: 'Sci-Fi', required: false })
    genre?: string;

    @ApiProperty({ example: 0 })
    rating: number;

    @ApiProperty({ example: '2025-11-28T12:00:00.000Z' })
    createdAt: Date;
  }
}
