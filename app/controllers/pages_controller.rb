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

  def test
    FakeJob.perform_later
  end

end
