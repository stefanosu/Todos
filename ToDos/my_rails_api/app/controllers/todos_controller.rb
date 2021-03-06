class TodosController < ApplicationController
    before_action :set_todo, only:[:show, :udpate, :destroy]

def index
    @todos = Todo.all
    render json: @todos
end


def show 
    render json: @todo
end


def create
    @todo = Todo.create(todos_params)
    @categories = Category.all
    if @todo.valid? 
    render json: @categories
    current_span = Datadog.tracer.active_span
    current_span.set_tag('<todos>', '<val>') unless current_span.nil?
    else
        render json: { errors: @todos.error_full_messages }
    end 
end


def update
    if @todo.update(todos_params)
        render json: @todo 
    else 
        render json: @todo.errors, status: :unprocessable_entity
    end
end

def destroy 
    @todo.destroy
    @categories = Category.all
    render json: @categories
end

private 

def set_todo 
    @todo = Todo.find(params[:id])
end

def todos_params
    params.permit(:name, :category_id)
end

end
