module Api
  module V1
    class TodosController < ApplicationController
      def index
        render json: Todo.all
      end
    end
  end
end
