import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dtio/create-movie.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Movies') 
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}


//   @Post()
//   @ApiOperation({ summary: 'Create a new movie' })
//   @ApiResponse({ status: 201, description: 'Movie successfully created', type: CreateMovieDto.Output })
//   async create(@Body() input: CreateMovieDto.Input): Promise<CreateMovieDto.Output> {
//     return this.moviesService.create(input);
//   }

//   @Get()
//   @ApiOperation({ summary: 'Get all movies' })
//   @ApiResponse({ status: 200, description: 'List of movies', type: [CreateMovieDto.Output] })
//   async findAll(): Promise<CreateMovieDto.Output[]> {
//     return this.moviesService.findAll();
//   }

//   @Get(':id')
//   @ApiOperation({ summary: 'Get a movie by ID' })
//   @ApiResponse({ status: 200, description: 'Movie details', type: CreateMovieDto.Output })
//   async findOne(@Param('id') id: string): Promise<CreateMovieDto.Output> {
//     return this.moviesService.findOne(id);
//   }

//   @Patch(':id')
//   @ApiOperation({ summary: 'Update a movie' })
//   @ApiResponse({ status: 200, description: 'Updated movie', type: CreateMovieDto.Output })
//   async update(
//     @Param('id') id: string,
//     @Body() input: Partial<CreateMovieDto.Input>,
//   ): Promise<CreateMovieDto.Output> {
//     return this.moviesService.update(id, input);
//   }
//   @Delete(':id')
//   @ApiOperation({ summary: 'Delete a movie' })
//   @ApiResponse({ status: 200, description: 'Movie deleted successfully' })
//   async delete(@Param('id') id: string): Promise<{ message: string }> {
//     return this.moviesService.delete(id);
//   }



@Get('popular/tmdb')
async getPopularFromTMDb(): Promise<CreateMovieDto.Output[]> {
  return this.moviesService.fetchTMDbPopular();
}

}
