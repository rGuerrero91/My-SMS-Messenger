class ApplicationController < ActionController::API
    # had to include this because devise loses its marbles in api only mode.
    before_action :configure_permitted_parameters, if: :devise_controller?
    before_action :authenticate_user!

    rescue_from Devise::MissingWarden do
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  
    # This is the key override for API-style unauthorized responses
    def authenticate_user!(opts = {})
        unless user_signed_in?
            render json: { error: 'Please sign in before continuing.' }, status: :unauthorized
        end
    end 
    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
    end
end
