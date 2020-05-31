class VideosController < ApplicationController
  def index

    @title = "TRANSLATOR"
    @dog_placeholder = "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    @cat_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

    @pet = Pet.find(params[:pet_id])
    @pets = current_user.pets
    @video = Video.new

    @videos = @pet.videos

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


  def destroy
    @pet = Pet.find(params[:pet_id])
    @video = Video.find(params[:id])
    @video.destroy
    redirect_to pet_videos_path(@pet)
  end

  private

  def video_params
    params.require(:video).permit(:clip)
  end

  def pet_select
    params.require(:video).permit(:pet_selected)
  end

end
