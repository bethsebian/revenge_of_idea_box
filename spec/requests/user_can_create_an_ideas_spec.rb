require 'rails_helper'

RSpec.describe "UserCanCreateAnIdeas", type: :request do
  describe "GET /user_can_create_an_ideas" do
    it "allows user to add idea on homepage" do

      visit '/'
      expect(page).to have_content("Revenge of Idea Box")

      fill_in "Title", with: "Idea 1"
      fill_in "Body", with: "Body 1"
		  select "plausible", from: "Quality"
      click_button "Add Idea"

      visit root_path
      expect(page).to have_content("Idea 1")
      expect(page).to have_content("Body 1")
      expect(page).to have_content("plausible")
    end
  end
end
