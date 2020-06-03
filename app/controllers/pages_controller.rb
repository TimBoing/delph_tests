class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    if user_signed_in?
      if current_user.pets.count > 0
        redirect_to pets_path
      else
        redirect_to welcome_path
      end
    end
  end


  def welcome
  end

  def comming_soon
    @pets = current_user.pets
    @dog_placeholder = "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    @cat_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    @pet = current_user.pets.first
    @video = Video.new

  end

  def test
    FakeJob.perform_later
  end

end

