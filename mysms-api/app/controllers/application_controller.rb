class ApplicationController < ActionController::API

    # had to include this, because devise loses its marbles in api only mode.
    before_action :configure_permitted_parameters, if: :devise_controller?

      protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
    end
end
