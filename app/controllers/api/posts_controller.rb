class Api::PostsController < ApplicationController
  def index
    @posts = City.find(params[:city_id]).posts.order("updated_at DESC")
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
    @post = Post.find(params[:id])
    @post.update(post_params)
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render status: 200
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :photo_url, :user_id, :city_id)
  end

end
