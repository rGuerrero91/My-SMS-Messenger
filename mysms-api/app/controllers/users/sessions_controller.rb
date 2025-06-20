class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private
  #devise would attempt to redirect to a view, which we don't have in API mode.
  def respond_with(resource, _opts = {})
    render json: {
      status: {code: 200, message: 'Logged in successfully.'},
      data: resource
    }, status: :ok
  end

  def respond_to_on_destroy
    render json: {
      status: 200,
      message: "Logged out successfully."
    }, status: :ok
  end
end
