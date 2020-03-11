Rails.application.routes.draw do
  
# Categories Routes #  
get '/getCategories', to: 'categories#index'
post '/newCategories', to: 'categories#create'
delete '/removeCategories/:id', to: 'categories#destroy'
patch  '/updateCategories/:id', to: 'categories#update'


# Todos Routes #
get '/getTodos', to: 'todos#index' 
post '/newTodos', to: 'todos#create' 
delete '/removeTodos/:id', to: 'todos#destroy'
patch '/updateTodos/:id', to: 'todos#update'

resources :todos 
resources :categories

get '/getTodos' do
  Datadog.tracer.trace('web.request') do |span|
    span.set_tag('http.url', request.path)
    span.set_tag('<todos>', '<val>')
  end
end
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
