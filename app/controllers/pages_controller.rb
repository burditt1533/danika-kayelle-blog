class PagesController < ApplicationController

	def photos
		@images = Dir.glob("app/assets/images/*.jpg")
	end

	def videos
	end
end
