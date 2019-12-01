class CategorySerializer < ActiveModel::Serializer
  attributes :id, :title , :todos
  # has_many :todos, serializer: TodoSerializer
end
