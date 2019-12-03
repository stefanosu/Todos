Rails.application.routes.draw do
  
# Categories Routes #  
get '/getCategories', to: 'categories#index'
post '/newCategories', to: 'categories#create'


# Todos Routes #
get '/getTodos', to: 'todos#index' 
post '/newTodos', to: 'todos#create' 


resources :todos 
resources :categories
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
