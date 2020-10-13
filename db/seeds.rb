# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

testUser = User.create(email: 'test@example.com', password: 'password')

homeList = TodoList.create(name: 'Home', user_id: testUser.id)

Todo.create([
                {name: 'Do smth1', todo_list_id: homeList.id, completed: true, dead_line: Time.now},
                {name: 'Do smth2', todo_list_id: homeList.id, completed: true, dead_line: Time.now},
                {name: 'Do smth3', todo_list_id: homeList.id, completed: true, dead_line: Time.now},
                {name: 'Do smth4', todo_list_id: homeList.id, completed: true, dead_line: Time.now},
            ])


workList = TodoList.create(name: 'Work', user_id: testUser.id)

Todo.create([
                {name: 'Do smth1', todo_list_id: workList.id, completed: true, dead_line: Time.now},
                {name: 'Do smth2', todo_list_id: workList.id, completed: true, dead_line: Time.now},
                {name: 'Do smth3', todo_list_id: workList.id, completed: true, dead_line: Time.now},
                {name: 'Do smth4', todo_list_id: workList.id, completed: true, dead_line: Time.now},
            ])