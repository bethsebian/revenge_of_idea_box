class Api::V1::IdeasController < ApplicationController
  def create
    @idea = Idea.create(idea_params)
    @ideas = Idea.all
    render json: @ideas
  end

  private

    def idea_params
      params.permit(:title, :body, :quality)
    end
end