class DeleteTodosCascade < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :todos, :todo_lists

    add_foreign_key :todos, :todo_lists, on_delete: :cascade
  end
end
