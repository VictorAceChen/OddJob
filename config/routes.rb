Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:new, :create, :show]
  end

  root "static_pages#root"

end
