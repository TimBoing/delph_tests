class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    if user_signed_in?
      redirect_to pets_path
    end
  end

  def test
    FakeJob.perform_later
  end
end
