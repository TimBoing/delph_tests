class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    if user_signed_in?
      redirect_to pets_path
    end
  end

  def test
    puts "waiting 10 sec"
    sleep 10
    puts "waiting 10 sec more"
    waitingTen
  end

  def waitingTen
    sleep 10
    puts "waiting 11 sec more"
    waitingElevenMore
  end

  def waitingElevenMore
    sleep 11
  end
end
