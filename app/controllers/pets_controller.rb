
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

    @title = "ABOUT"
    @dog_placeholder = "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    @cat_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    @pets = current_user.pets
    @video = Video.new

    @pet = Pet.find(params[:id])
    @pet_personality = pet_personality_check(@pet)
  end

  def new
    @pet = Pet.new
  end

  def edit_personality
    @dog_placeholder = "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    @cat_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

    @pet = Pet.find(params[:pet_id])
  end

  def edit
    @pet = Pet.find(params[:id])
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

  def pet_personality_check(pet)

    one = pet.openess.to_i >= 5 ? 1 : 0
    two = pet.conscientiousness.to_i >= 5 ? 1 : 0
    three = pet.extravertness.to_i >= 5 ? 1 : 0
    four = pet.agreableness.to_i >= 5 ? 1 : 0
    five = pet.stableness.to_i >= 5 ? 1 : 0

    personality_code = "#{one}#{two}#{three}#{four}#{five}"

    case personality_code
    when "11111"
      personality = 1
    when "11110"
      personality = 2
    when "11101"
      personality = 3
    when "11100"
      personality = 4
    when "11011"
      personality = 5
    when "11010"
      personality = 6
    when "11001"
      personality = 7
    when "11000"
      personality = 8
    when "10111"
      personality = 9
    when "10110"
      personality = 10
    when "10101"
      personality = 11
    when "10100"
      personality = 12
    when "10011"
      personality = 13
    when "10010"
      personality = 14
    when "10001"
      personality = 15
    when "10000"
      personality = 16
    when "01111"
      personality = 17
    when "01110"
      personality = 18
    when "01101"
      personality = 19
    when "01100"
      personality = 20
    when "01011"
      personality = 21
    when "01010"
      personality = 22
    when "01001"
      personality = 23
    when "01000"
      personality = 24
    when "00111"
      personality = 25
    when "00110"
      personality = 26
    when "00101"
      personality = 27
    when "00100"
      personality = 28
    when "00011"
      personality = 29
    when "00010"
      personality = 30
    when "00001"
      personality = 31
    when "00000"
      personality = 32
    else
      personality = "error"
    end

    return personality
  end

end



