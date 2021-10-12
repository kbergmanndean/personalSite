class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :url
      t.string :partner

      t.timestamps
    end
  end
end
