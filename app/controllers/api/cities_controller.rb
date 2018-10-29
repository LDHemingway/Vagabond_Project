class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    render json: @cities
  end

  def show
    @city = [City.find(params[:id]), City.find(params[:id]).posts.order("created_at DESC")]
    render json: @city
  end

  def create
    @city = City.create!(city_params)
    render json: @city
  end

  def update
    @city = City.find(params[:id])
    @city.update!(city_params)
    render json: @city
  end

  def destroy
    @city = City.find(params[:id])
    @city.destroy
    render status: 200
  end

  private

  def city_params
    params.require(:city).permit(:name, :location, :picture_url)
  end

end
