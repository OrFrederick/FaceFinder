class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.timestamp :recording_start
      t.timestamp :recording_end

      t.timestamps
    end
  end
end
