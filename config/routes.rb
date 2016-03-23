Rails.application.routes.draw do
  root to: "home#index"

  namespace :api do
    namespace :v1 do
      resources :ideas, only: [:new, :create, :show, :index, :destroy, :update]
    end
  end
end
