Rails.application.routes.draw do

  require "sidekiq/web"
  mount Sidekiq::Web => '/sidekiq'


  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :videos, only: [:new, :create]
  resources :pets do
    resources :videos, only: [:index, :show]
  end

  get '/test', to: "pages#test"

  get '/adri', to: 'pages#adri'
end

