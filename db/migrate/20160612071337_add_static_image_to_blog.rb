class AddStaticImageToBlog < ActiveRecord::Migration
  def change
  	add_column :blogs, :static_image, :string
  end
end
