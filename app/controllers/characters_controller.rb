class CharactersController < ApplicationController
  def index
    if params[:keywords].present?
      # Diz ao elastickick para pesquisar as keyrwords nos campos name e description
      @characters = Character.search params[:keywords], fields: [:name, :description, :thumbnail]
    end
  end
end
