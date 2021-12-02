class Api::MoviesController < ApplicationController
  before_action :set_theater
  before_action :set_movie, only: [:show, :destroy, :update]

  def index
    render json: @theater.movies.all
  end

  def show 
    render json: @movie
  end

  def create
    @movie = Movie.new(movie_params)
    if(@movie.save)
      render json: @movie
    else
      render json: {error: @movie.errors}, status: 422
    end
  end

  def update
    if(@movie.update(movie_params))
      render json: @movie
    else 
    end
  end

  def destroy
    render json: @movie.destroy
  end

  private
  
  def set_theater
    @theater = Theater.find(params[:theater_id])
  end

  def set_movie
    @movie = @theater.movies.find(params[:id])
  end

  def movie_params
    params.require(:movie).permit(:name,:duration,:theater_id)
  end

end
