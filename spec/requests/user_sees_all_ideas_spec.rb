require 'rails_helper'

RSpec.describe "UserSeesAllIdeas", type: :request do
  describe "GET /user_sees_all_ideas" do
    it "shows ideas in descending order by created at date" do
      idea_2 = Idea.create(title: "Title 2", body: "Body 2")
      idea_1 = Idea.create(title: "Title 1", body: "Body 1")
      idea_3 = Idea.create(title: "Title 3", body: "Body 3")

      visit root_path

      within(".idea_1") do
        expect(page).to have_content("Title 2")
        expect(page).to have_content("Body 2")
      end

      within(".idea_2") do
        expect(page).to have_content("Title 2")
        expect(page).to have_content("Body 2")
      end

      within(".idea_3") do
        expect(page).to have_content("Title 2")
        expect(page).to have_content("Body 2")
      end
    end
  end
end
