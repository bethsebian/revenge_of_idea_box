Rails.application.routes.draw do
  root to: "home#index"

  resources :ideas, only: [:new, :create]
end
