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

    video = Video.new(video_params)
    video.pet = Pet.find(1)
    video.save!
    #Cloudinary::Uploader.upload(".",:resource_type => :video)
  end

  def new
    @video = Video.new

  end

  private

  def video_params
    params.require(:video).permit(:clip)
  end

end
