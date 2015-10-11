class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # before_filter :redirect_index
  #
  # private
  #
  # def redirect_index
  #   redirect_to(root_path) return unless 'home'
  # end
end
