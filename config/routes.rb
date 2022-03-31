Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:show] do
    resources :lists, except:[:delete, :patch] do
      resources :bookmarks, only: [ :new, :create ]
    end
  end
  resources :hero_display, only:[:index, :show]
  resources :bookmarks, only: [ :destroy, :edit, :update ]
end
