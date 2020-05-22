class VideosController < ApplicationController
  def index
    @pet = Pet.find(params[:pet_id])
    @videos = @pet.videos
    @img_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

  end

  def show
  end

  def edit
  end

  def update
  end

  def create

    @pet = Pet.find(params[:pet_id])
    video = Video.new(video_params)
    video.pet = @pet
    if video.save
      redirect_to pet_videos_path(video.pet)
    end
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
