Rails.application.routes.draw do
devise_for :users,
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  },
  defaults: { format: :json }


  # we are only creating and fetching all messages for now.
  resources :messages, only: [:create, :index]
end
