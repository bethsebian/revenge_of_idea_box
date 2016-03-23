class Api::V1::IdeasController < ApplicationController
  def create
    @idea = Idea.new(idea_params)
    respond_to do |format|
      if @idea.save
        format.json { render json: @idea, status: :created }
      else
        format.json { render json: @idea.errors, status: :unprocessable_entity }
      end
    end
  end

  def index
    @ideas = Idea.all
    respond_to do |format|
      format.json { render json: @ideas }
    end
  end

  private

    def idea_params
      params.permit(:title, :body, :quality)
    end
end