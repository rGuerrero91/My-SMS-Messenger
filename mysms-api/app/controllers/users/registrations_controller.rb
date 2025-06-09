class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  skip_before_action :authenticate_user!, only: [:create]
  def create
    build_resource(sign_up_params)

    resource.save
    if resource.persisted?
      if resource.active_for_authentication?
        render json: { message: 'Signed up successfully.', user: resource }, status: :created
      else
        render json: {
          message: "Signed up but #{resource.inactive_message}",
          user: resource
        }, status: :created
      end
    else
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  protected

  def set_flash_message!(*args); end
end
