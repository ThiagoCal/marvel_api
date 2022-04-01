class ChangeThumbnailInCharacters < ActiveRecord::Migration[6.1]
  def change
    change_column :characters, :thumbnail, :string
  end
end
