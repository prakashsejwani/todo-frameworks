Rails.application.routes.draw do

  resources :projects do
    resources :tasks
  end

  root 'home#index'

end
