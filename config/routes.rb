Rails.application.routes.draw do
  get 'my_app/index'
  resources :todos
  resources :todo_lists
  devise_for :users
  root "my_app#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
