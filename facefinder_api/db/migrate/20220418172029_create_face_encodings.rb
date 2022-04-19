class CreateFaceEncodings < ActiveRecord::Migration[7.0]
  def change
    create_table :face_encodings do |t|
      t.text :encoding
      t.belongs_to :person, null: false, foreign_key: true
      t.timestamps
    end
  end
end
