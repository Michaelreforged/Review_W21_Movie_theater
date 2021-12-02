class Api::MoviesController < ApplicationController
  before_action :set_theater
  before_action :set_movie, only: [:show, :destroy, :update]
  def index
    render json: Movie.all
  end

  def show 
    render json: @movie
  end

  def create

  end

  def update

  end

  def destroy

  end

  private
  def set_movie
    @movie = Movie.find(params[:id])
  end

  def set_theater
    @theater = Theater.find(params[:theater_id])
  end
end
