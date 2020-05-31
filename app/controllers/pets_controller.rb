
class PetsController < ApplicationController

  def index
    # @jojo = current_user
    @pets = current_user.pets

    @dog_placeholder = "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    @cat_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

    @pet = current_user.pets.first
    @video = Video.new
  end

  def show

    @dog_placeholder = "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    @cat_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

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

  def edit_personality
    @dog_placeholder = "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    @cat_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

    @pet = Pet.find(params[:pet_id])
  end

  def update

    @pet = Pet.find(params[:id])
    @pet.update(pet_params)
    redirect_to pets_path

  end

  def create
    # raise
    @pet = Pet.new(pet_params)
    @pet.user = current_user
    if @pet.save
      redirect_to pet_edit_personality_path(@pet)
    else
      render :new
    end
  end

  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
    redirect_to pets_path
  end

  private
  def pet_params
    params.require(:pet).permit(:name, :pet_type, :birth_date, :gender, :breed,:photo, :openess, :conscientiousness, :extravertness, :agreableness, :stableness)
  end

end



