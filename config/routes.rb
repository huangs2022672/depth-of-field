Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :photos, only: [:create]
      resources :follows, only: [:create]
    end
    resources :photos, only: [:show, :index, :update, :destroy] do
      resources :comments, only: [:index, :create]
      resources :likes, only: [:create]
    end

    resources :comments, only: [:show, :update, :destroy]
    resources :follows, only: [:show, :index, :destroy]
    resources :photos, only: [:show, :index, :destroy]
    resources :likes, only: [:show, :index, :destroy]

  end

  root to: "static_pages#root"

end
