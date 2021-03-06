class BlogsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_blog, only: [:show, :edit, :update, :destroy, :upvote]


  # GET /blogs
  # GET /blogs.json
  def index
    # require 'json'
    if params[:tag]
      @blogs = Blog.all.tagged_with(params[:tag]).paginate(:page => params[:page]).per_page(20).order('created_at DESC')
    else
      @blogs = Blog.paginate(:page => params[:page]).per_page(20).order('created_at DESC')
      @docs = Nokogiri::XML(File.open("app/assets/javascripts/danika_blog.xml"))
      @images = Nokogiri::XML(File.open("app/assets/javascripts/danika_blog_images.xml"))

      @image = @images.css("item")
      @title = @docs.xpath("//item")
    end

  end

  def old_blogs
      @docs = Nokogiri::XML(File.open("app/assets/javascripts/danika_blog.xml"))
      @images = Nokogiri::XML(File.open("app/assets/javascripts/danika_blog_images.xml"))

      @image = @images.css("item")
      @title = @docs.xpath("//item")
  end

  # GET /blogs/1
  # GET /blogs/1.json
  def show
    @blog = Blog.find(params[:id])
  end

  # GET /blogs/new
  def new
    @blog = Blog.new
  end

  # GET /blogs/1/edit
  def edit
  end

  # POST /blogs
  # POST /blogs.json
  def create
    @blog = Blog.new(blog_params)

    respond_to do |format|
      if @blog.save
        format.html { redirect_to @blog, notice: 'Blog was successfully created.' }
        format.json { render action: 'show', status: :created, location: @blog }
      else
        format.html { render action: 'new' }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blogs/1
  # PATCH/PUT /blogs/1.json
  def update
    respond_to do |format|
      if @blog.update(blog_params)
        format.html { redirect_to @blog, notice: 'Blog was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blogs/1
  # DELETE /blogs/1.json
  def destroy
    @blog.destroy
    respond_to do |format|
      format.html { redirect_to blogs_url }
      format.json { head :no_content }
    end
  end

  def upvote
    @blog
    redirect_to :back
  end

  def love
    @blog = Blog.find(params[:id])

    @blog.increment(:likes)

    @blog.update(likes: @blog.likes)

    render json: @blog.likes
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def blog_params
      params.require(:blog).permit(:title, :content, :image, :tag_list)
    end
end
