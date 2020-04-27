class VideosController < ApplicationController
  def index
    @pet = Pet.find(params[:pet_id])
    @videos = @pet.videos
  end

  def show
  end

  def edit
  end

  def update
  end

  def create
    video = Video.new
    video.pet = Pet.find(1)
    video.save!
  end

  def new
    @video = Video.new
  end

end
