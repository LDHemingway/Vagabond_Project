class Api::PostsController < ApplicationController
  def index
    @posts = City.find(params[:city_id]).posts
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @post = City.find(params[:city_id]).posts.create!(post_params)
    render json: @post
  end

  def update
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :comment)
  end

end
