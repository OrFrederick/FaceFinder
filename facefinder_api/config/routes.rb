Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace "api" do
    get 'people/next_id/', to: 'people#next_id'
    get 'videos/next_id/', to: 'videos#next_id'
    resources :people, :videos, :detections, :face_encodings
  end
end
