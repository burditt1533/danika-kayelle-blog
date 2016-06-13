task setup: :environment do
	Blog.delete_all

	docs = Nokogiri::XML(File.open("app/assets/javascripts/danika_blog.xml"))
	images = Nokogiri::XML(File.open("app/assets/javascripts/danika_blog_images.xml"))

	image = images.css("item")
	title = docs.xpath("//item")

	title.each do |blog|  

		imgIDs = blog.css("wp|postmeta wp|meta_key:contains('thumbnail_id') ~ wp|meta_value").try(:text)
		staticImage =  "https://s3.amazonaws.com/danika-kayelle/blog_images/" + image.xpath(".//post_id[text() = '" + imgIDs + "']/following-sibling::attachment_url").text.split('/').last.to_s

		the_blog = Blog.create! title: blog.xpath("title").text, 
					 content: blog.xpath("content:encoded").text, 
					 created_at: blog.xpath("wp:post_date").text.to_datetime, 
					 static_image: staticImage == "https://s3.amazonaws.com/danika-kayelle/blog_images/" ? "" : staticImage

					 puts blog.xpath("title").text
					 
		blog.xpath("category").each do |tag|
             the_blog.tag_list.add "#{tag.text}"
        end

        blog.xpath("wp:post_id/following-sibling::wp:comment").each do |comment|

        	Comment.create! name: comment.xpath("wp:comment_author").text, 
				        	body: comment.xpath("wp:comment_content").text, 
				        	blog_id: Blog.last.id

			
			# comment.xpath("wp:comment_date").text.to_datetime.strftime("%B %d, %Y ")
			
		end



		the_blog.save


	end 

	
end

