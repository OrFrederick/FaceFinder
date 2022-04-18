class Api::PeopleController < ApplicationController
    def index
        people = Person.all
        render json: people
    end

    def create
        person = Person.new(person_params)
        if person.save
            render json: person
        else
            render json: {error: 'Unable to create Person'}, status: 400
        end
    end

    def update
        person = Person.find(params[:id])
        person.update_attributes(person_params)
        render json: person
    end

    def next_id
        render json: {next_id: Person.all.sort_by(&:id)[-1].id + 1}
    end

    private

    def person_params
        params.permit(:name, :color)
    end
end
