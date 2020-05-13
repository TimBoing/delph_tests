Rails.application.routes.draw do

  require "sidekiq/web"
  mount Sidekiq::Web => '/sidekiq'


  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :videos, only: [:new, :create]
  resources :pets do
    resources :videos, only: [:index, :show]
    resources :stats, only: [:index]
    get '/emotions', to: 'stats#emotions'
    get '/activity', to: 'stats#activity'
    get '/sleep', to: 'stats#sleep'
    get '/scratching', to: 'stats#scratching'
    get '/weight', to: 'stats#weight'
    get '/breathing', to: 'stats#breathing'
    get '/butt_licking', to: 'stats#butt_licking'
    get '/plotting', to: 'stats#plotting'
    get '/kick_plants', to: 'stats#kick_plants'
  end

end

