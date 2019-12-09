class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :update, :destroy]

  def index 
    @categories = Category.all 
    render json: @categories
  end


  def show 
      render json: @category
  end


  def create 
      # byebug 
      @category = Category.create(category_params)
      @categories = Category.all
      if @category.valid?   
          render json: @categories
      else 
          render json: {errors: @category.errors.full_messages}
      end
  end


  def update 
      # category = Category.update(category_params)
      if @category.update(category_params)
          render json: @category
      else 
          render json: @category.errors, status: :unprocessable_entity
      end
  end


  def destroy 
      # byebug
    @category.destroy
    @categories = Category.all
    render json: @categories

  end


  private 
  def set_category 
      @category = Category.find(params[:id])
  end

  def category_params 
      params.require(:category).permit(:title) 
  end 

  end
