class Api::V1::IdeasController < ApplicationController
  def create
    idea = Idea.create(idea_params)
    respond_to do |format|
      format.json { render json: idea, status: :created }
    end
  end

  def show
    idea = Idea.find(params[:id])
    respond_to do |format|
      format.json { render json: idea, status: :created }
    end
  end

  def index
    ideas = Idea.all
    respond_to do |format|
      format.json { render json: ideas }
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
    idea.update_changes(idea_params, params[:change_type])
    respond_to do |format|
      format.json { render json: idea }
    end
  end

  private

    def idea_params
      params.permit(:title, :body, :quality)
    end
end