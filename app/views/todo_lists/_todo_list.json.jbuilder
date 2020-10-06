json.extract! todo_list, :id, :name, :user_id, :created_at, :updated_at
json.url todo_list_url(todo_list, format: :json)
