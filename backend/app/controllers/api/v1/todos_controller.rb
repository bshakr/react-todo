module Api
  module V1
    class TodosController < ApplicationController
      def index
        @todos = Todo.all
      end
    end
  end
end
