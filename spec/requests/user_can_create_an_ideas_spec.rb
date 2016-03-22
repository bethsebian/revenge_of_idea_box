require 'rails_helper'

RSpec.describe "UserCanCreateAnIdeas", type: :request do
  describe "GET /user_can_create_an_ideas" do
    it "works! (now write some real specs)" do
      get user_can_create_an_ideas_path
      expect(response).to have_http_status(200)
    end
  end
end
