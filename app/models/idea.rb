class Idea < ActiveRecord::Base
  default_scope { order('created_at DESC') }

  def truncated_body
    body.truncate_words(30)
  end

  def upvote
    self.quality = "genius" if self.quality == "plausible"
    self.quality = "plausible" if self.quality == "swill"
    self.save
  end

  def downvote
    self.quality = "swill" if self.quality == "plausible"
    self.quality = "plausible" if self.quality == "genius"
    self.save
  end

  def update_changes(idea_params, change_type)
    self.update(idea_params)
    self.upvote if change_type == "upvote"
    self.downvote if change_type == "downvote"
  end

end
