class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
  	@current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login user
  	session[:session_token] = user.reset_session_token!
  end

  def logout
    session[:session_token] = nil
    current_user.reset_session_token!
    @current_user = nil
  end

  def signed_in?
    !!current_user
  end

  def require_signed_in!
	  # redirect_to new_session_url if !signed_in?
    unless signed_in?
      render json: "You most be logged in to see this page", status: 401
    end
	end

end
