class CreateArtworks < ActiveRecord::Migration[6.1]
  def change
    create_table :artworks do |t|
      t.string :name
      t.string :url 
      t.string :artist
      t.integer :year

      t.timestamps
    end
  end
end
