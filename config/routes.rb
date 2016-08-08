Rails.application.routes.draw do

  # root to: 'rooms#show'

  root to: "static_pages#root"


  resources :chats, only: [:index]
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:new, :create, :show]
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :jobs, only: [:index, :create, :update, :show, :destroy]
    resources :my_jobs, only: [:index, :create, :edit, :show]
    delete '/my_jobs/', to: 'my_jobs#destroy'

  end

  get '/auth/twitter/callback', to: 'api/sessions#twitter_create'
  get '/auth/facebook/callback', to: "api/sessions#create_with_facebook"

  # mount ActionCable.server => '/cable'
end
