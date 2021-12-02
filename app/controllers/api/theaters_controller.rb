class Api::TheatersController < ApplicationController
  before_action :set_theater, only: [:show, :update, :destroy]

  def index
    render json: Theater.all
  end

  def show 
    render json: @theater
  end

  def create

  end

  def update

  end

  def destroy

  end

  private


  def set_theater
    @theater = Theater.find(params[:id])
  end
end
