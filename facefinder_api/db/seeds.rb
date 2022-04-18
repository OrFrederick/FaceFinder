# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
person1 = Person.create(
    {
        name: "Heinz",
        color: "BBBBBB"
    }
)

person2 = Person.create(
    {
        name: "Moritz",
        color: "AAFFEE"
    }
)

video1 = Video.create(
    {
        title: "2022-01-03 19:30 Uhr",
        recording_start: 2.days.ago,
        recording_end: 1.days.ago
    }
)

video2 = Video.create(
    {
        title: "2022-04-03 19:30 Uhr",
        recording_start: 234.days.ago,
        recording_end: 233.days.ago
    }
)

video3 = Video.create(
    {
        title: "2022-03-05 19:30 Uhr",
        recording_start: 12.days.ago,
        recording_end: 11.days.ago
    }
)

Detection.create(
    {
        timestamp: 2,
        datetime: 11.days.ago,
        top: 1,
        bottom: 0,
        left: 1,
        right: 2,
        video: video1,
        person: person1
    }
)

Detection.create(
    {
        timestamp: 2,
        datetime: 11.days.ago,
        top: 1,
        bottom: 0,
        left: 1,
        right: 2,
        video: video2,
        person: person2
    }
)

Detection.create(
    {
        timestamp: 2,
        datetime: 11.days.ago,
        top: 1,
        bottom: 0,
        left: 1,
        right: 2,
        video: video2,
        person: person1
    }
)

Detection.create(
    {
        timestamp: 2,
        datetime: 11.days.ago,
        top: 1,
        bottom: 0,
        left: 1,
        right: 2,
        video: video1,
        person: person2
    }
)

Detection.create(
    {
        timestamp: 2,
        datetime: 10.days.ago,
        top: 1,
        bottom: 0,
        left: 1,
        right: 2,
        video: video2,
        person: person2
    }
)