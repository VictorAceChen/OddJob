Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:new, :create, :show]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :jobs, only: [:index, :create, :edit, :show]
    resources :my_jobs, only: [:index, :create, :edit, :show, :destroy]

  end

  get '/auth/twitter/callback', to: 'api/sessions#twitter_create'
  get '/auth/facebook/callback', to: "api/sessions#create_with_facebook"

  root "static_pages#root"

end
