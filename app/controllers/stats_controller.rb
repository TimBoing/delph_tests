class StatsController < ApplicationController
  before_action :get_common_info

  def index
    @title = "SUMMARY"
    @dog_placeholder = "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    @cat_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"


    @pet = Pet.find(params[:pet_id])
    @pet_videos = @pet.videos.count

  end

  def emotions

  end

  def activity

  end

  def sleep

  end

  def scratching

  end

  def weight

  end

  def breathing

  end

  def butt_licking

  end

  def plotting

  end

  def kick_plants

  end

  private

  def get_common_info
    @img_placeholder = "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    @pet = Pet.find(params[:pet_id])
    @pets = current_user.pets
  end

end
