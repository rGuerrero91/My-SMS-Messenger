Rails.application.routes.draw do
  # we are only creating and fetching all messages for now.
  resources :messages, only: [:create, :index]
end
