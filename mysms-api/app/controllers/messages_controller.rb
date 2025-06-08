class MessagesController < ApplicationController
    before_action :assign_session_id

    def index
        messages = Message.where(session_id: session[:id])
        render json: messages
    end

    def create
        message = Message.create(
            session_id: session[:id],
            to: params[:to],
            body: params[:body],
            twilio_sid: params[:twilio_sid] || nil,
            status: params[:status] || 'pending'
        )
        render json: message, status: :created
    end 

    private

    def assign_session_id
        session[:id] ||= SecureRandom.uuid
    end
end