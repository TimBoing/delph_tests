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
    if current_user.pets.length == 1
      @pet = Pet.find(params[:pet_id])
    else
      @pet = Pet.find(pet_select[:pet_selected])
    end

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

  def pet_select
    params.require(:video).permit(:pet_selected)
  end

end
