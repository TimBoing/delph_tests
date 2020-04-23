class CreateStats < ActiveRecord::Migration[5.2]
  def change
    create_table :stats do |t|
      t.references :pet, foreign_key: true
      t.string :category
      t.string :value
      t.datetime :time
      t.timestamps
    end
  end
end
