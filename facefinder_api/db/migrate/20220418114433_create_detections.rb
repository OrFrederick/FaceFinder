class CreateDetections < ActiveRecord::Migration[7.0]
  def change
    create_table :detections do |t|
      # t.integer :timestamp
      t.decimal :timestamp
      t.timestamp :datetime
      t.integer :top
      t.integer :bottom
      t.integer :left
      t.integer :right
      t.belongs_to :video, null: false, foreign_key: true
      t.belongs_to :person, null: false, foreign_key: true
    end
  end
end
