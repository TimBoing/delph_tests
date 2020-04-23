class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.references :user, foreign_key: true
      t.string :name
      t.string :pet_type
      t.string :birth_date
      t.string :gender
      t.string :breed
      t.timestamps
    end
  end
end
