class TodosController < ApplicationController
  before_action :get_todo_list
  before_action :set_todo, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.where(todo_list_id: @todo_list.id)
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
  end

  # GET /todos/new
  def new
    @todo = Todo.new
  end

  # GET /todos/1/edit
  def edit
  end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(todo_params)

    @todo.todo_list = @todo_list

    respond_to do |format|
      if @todo.save
        format.html { redirect_to todo_list_todo_path(@todo_list, @todo), notice: 'Todo was successfully created.' }
        format.json { render :show, status: :created, location: @todo }
      else
        format.html { render :new }
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    respond_to do |format|
      if @todo.update(todo_params)
        format.html { redirect_to [@todo_list, @todo], notice: 'Todo was successfully updated.' }
        format.json { render :show, status: :ok, location: @todo }
      else
        format.html { render :edit }
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.destroy
    respond_to do |format|
      format.html { redirect_to todo_list_todos_path, notice: 'Todo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def get_todo_list
      @todo_list = TodoList.find_by!(id: params[:todo_list_id], user_id: current_user.id)
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find_by!(id: params[:id], todo_list_id: @todo_list.id)
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:name, :dead_line, :completed)
    end
end
