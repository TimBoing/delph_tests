class RegistrationsController < Devise::RegistrationsController

  protected
  def after_update_path_for(resource)
    puts "I FUCKING WAS HERE---------------------------------------------"
    root_path
  end
end
