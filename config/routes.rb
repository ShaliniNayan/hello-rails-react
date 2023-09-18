Rails.application.routes.draw do
  get 'static/index'
  get 'random_greeting', to: 'greetings#random_greeting'
  root 'static#index'
end
