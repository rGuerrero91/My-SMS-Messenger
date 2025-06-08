class MessagesController < ApplicationController
    before_action :assign_session_id

    def index
        messages = Message.where(session_id: session[:id])
        render json: messages
    end

    def create
        message = Message.create(
            content: params[:content],
            session_id: session[:id],
            status: 'pending'
        )
        render json: message, status: :created
    end 

    private

    def assign_session_id
        session[:id] ||= SecureRandom.uuid
    end
end