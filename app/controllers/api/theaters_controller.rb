class Api::TheatersController < ApplicationController
  before_action :set_theater, only: [:show, :update, :destroy]

  def index
    render json: Theater.all
  end

  def show 
    render json: @theater
  end

  def create
    @theater = Theater.create(theater_params)
    if(@theater.save)
      render json: @theater
    else
      render json: {error: @theater.errors}, status: 422
    end
  end

  def update
    if(@theater.update(theater_params))
      render json: @theater
    else 
    end
  end

  def destroy
    render json: @theater.destroy
  end


  private


  def set_theater
    @theater = Theater.find(params[:id])
  end

  def theater_params
    parmas.require(:theater).permit(:name,:loc)
  end

end
