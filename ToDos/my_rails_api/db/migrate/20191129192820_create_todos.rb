class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :name
      t.integer :category_id
      t.timestamps
    end
  end
end
