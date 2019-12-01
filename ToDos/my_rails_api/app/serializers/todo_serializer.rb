class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name
  # belongs_to :categories
end
