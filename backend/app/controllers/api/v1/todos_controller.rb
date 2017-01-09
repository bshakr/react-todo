module Api
  module V1
    class TodosController < ApplicationController
      def index
        render json: Todo.all.order('created_at DESC')
      end

      def create
        todo = Todo.new(todo_params)
        todo.save

        head :ok
      end

      def update
        todo = find_todo
        todo.update_attributes(todo_params)
        head :ok
      end

      def destroy
        todo = find_todo
        todo.destroy!

        head :ok
      end

      private

      def find_todo
        Todo.find(params[:id])
      end

      def todo_params
        params.permit(:text, :completed)
      end
    end
  end
end
