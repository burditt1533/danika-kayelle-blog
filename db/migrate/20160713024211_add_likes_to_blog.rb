class AddLikesToBlog < ActiveRecord::Migration
  def change
    add_column :blogs, :likes, :integer,  default: 0
  end
end
