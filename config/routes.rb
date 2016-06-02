Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:new, :create, :show]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :jobs, only: [:index, :create, :edit, :show, :destroy]

  end

  root "static_pages#root"

end
