json.extract! todo, :id, :name, :dead_line, :completed, :todo_list_id, :created_at, :updated_at
json.url todo_list_todo_url(@todo_list, todo, format: :json)
