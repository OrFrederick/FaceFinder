# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_04_18_172029) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "detections", force: :cascade do |t|
    t.decimal "timestamp"
    t.datetime "datetime", precision: nil
    t.integer "top"
    t.integer "bottom"
    t.integer "left"
    t.integer "right"
    t.bigint "video_id", null: false
    t.bigint "person_id", null: false
    t.index ["person_id"], name: "index_detections_on_person_id"
    t.index ["video_id"], name: "index_detections_on_video_id"
  end

  create_table "face_encodings", force: :cascade do |t|
    t.binary "encoding"
    t.bigint "person_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_face_encodings_on_person_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "name"
    t.string "color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "videos", force: :cascade do |t|
    t.string "title"
    t.datetime "recording_start", precision: nil
    t.datetime "recording_end", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "detections", "people"
  add_foreign_key "detections", "videos"
  add_foreign_key "face_encodings", "people"
end
