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

  def show
    idea = Idea.find(params[:id])
    respond_to do |format|
      format.json { render json: idea, status: :created }
    end
  end

  def index
    @ideas = Idea.all
    respond_to do |format|
      format.json { render json: @ideas }
    end
  end

  def destroy
    idea = Idea.delete(params[:id])
    respond_to do |format|
      format.json {render json: idea }
    end
  end

  def update
    idea = Idea.find(params[:id])
    idea.update(idea_params)
    idea.upvote if params[:change_type] == "upvote"
    idea.downvote if params[:change_type] == "downvote"
    idea.reload
    respond_to do |format|
      format.json { render json: idea }
    end
  end

  private

    def idea_params
      params.permit(:title, :body, :quality)
    end
end