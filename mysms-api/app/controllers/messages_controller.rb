class MessagesController < ApplicationController
    # before_action :assign_session_id
    before_action :authenticate_user!

    def index
        messages = Message.where(user_id: current_user.id)
        render json: messages
    end

    def create
        sms = SendSms.call(to: message_params[:to], body: message_params[:body])

        message = Message.create(
            # session_id: session[:id],
            user_id: current_user.id,
            to: message_params[:to],
            body: message_params[:body],
            twilio_sid: sms&.sid || nil,
            status: sms&.status || 'failed to send'
        )
        render json: message, status: :created
    rescue StandardError => e
        render json: { error: e.message }, status: :unprocessable_entity
    end 

    private

    def assign_session_id
        session[:id] ||= SecureRandom.uuid
    end

    def message_params
        params.require(:message).permit(:to, :body)
    end
end