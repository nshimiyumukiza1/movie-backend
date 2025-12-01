import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { Movie, MovieDocument } from './schema/movie.schema';
import { CreateMovieDto } from './dtio/create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}

  async fetchTMDbPopular(): Promise<CreateMovieDto.Output[]> {
    const apiKey = process.env.TMDB_API_KEY;
    if (!apiKey) throw new Error('TMDb API key missing in .env');

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    );

    const movies = response.data.results;

    return movies.map((movie: any) => ({
      id: movie.id.toString(),
      title: movie.title,
      description: movie.overview,
      videoUrl: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, 
      imageUrl: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : undefined,
      genre: movie.genre_ids?.join(', ') || undefined,
      rating: movie.vote_average / 2,
      createdAt: new Date(movie.release_date),
    }));
  }

  async findAll(): Promise<CreateMovieDto.Output[]> {
    const movies = await this.movieModel.find().exec();
    return movies.map(this.mapToOutput);
  }

  private mapToOutput(movie: MovieDocument): CreateMovieDto.Output {
    return {
      id: movie._id.toString(),
      title: movie.title,
      description: movie.discription,
      videoUrl: movie.videoUrl,
      imageUrl: movie.imageUrl,
      genre: movie.genre,
      rating: movie.rating,
      createdAt: movie.createdAt,
    };
  }
}
