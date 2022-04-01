class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :description
      t.json :thumbnail

      t.timestamps
    end
  end
end
