class Api::UsersController < ApplicationController

	def index
		@users = User.all
		render 'index.json.jbuilder'
	end

	def show
		@user = User.find(params[:id])
		render 'show.json.jbuilder'
	end

end
