class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :duration
      t.belongs_to :theater, null: false, foreign_key: true

      t.timestamps
    end
  end
end
