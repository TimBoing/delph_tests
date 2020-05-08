
class PetsController < ApplicationController

  def index
    # @jojo = current_user
    @pets = current_user.pets
    @img_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    @video = Video.new
  end

  def show

    @img_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    @pet = Pet.find(params[:id])
    @pets = current_user.pets

    @stats = @pet.stats
    # @stats_by_month = @stats.map{|s| [Date::MONTHNAMES[s.time.month], s.value]}
    @emotions = @stats.select{|s| s.category == "Emotions"}.map{|s| [s.sub_category, s.value]}
    @activity = @stats.select{|s| s.category == "Activity"}.map{|s| [s.time, s.value]}


  end

  def new
    @pet = Pet.new
  end

  def create

    # raise
    @pet = Pet.new(pet_params)
    @pet.user = current_user
    if @pet.save
      redirect_to pet_path(@pet)
    else
      render :new
    end
  end

  private
  def pet_params
    params.require(:pet).permit(:name, :pet_type, :birth_date, :gender, :breed,:photo)
  end

end


