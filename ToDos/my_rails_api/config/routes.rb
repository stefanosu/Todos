Rails.application.routes.draw do
  
get '/getCategories', to: 'categories#index'
post '/newCategories', to: 'categories#create'

  resources :todos 
  resources :categories
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
