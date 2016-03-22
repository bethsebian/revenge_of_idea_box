class Idea < ActiveRecord::Base
  default_scope { order('created_at DESC') }

  def truncated_body
    body.truncate_words(30)
  end
end
