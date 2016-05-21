class Blog < ActiveRecord::Base
	has_many :comments, dependent: :destroy
	has_attached_file :image, styles: { large: "600x600>", medium: "300x300>", thumb: "100x100#" }

	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

	acts_as_taggable # Alias for acts_as_taggable_on :tags
  acts_as_taggable_on :skills, :interests
end
