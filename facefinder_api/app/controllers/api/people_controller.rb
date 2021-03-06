class Api::PeopleController < ApplicationController
    def index
        people = Person.all
        render json: people
    end

    def show
        person = Person.find(params[:id])
        render json: person
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
	
        if person.update(person_params_update)
            render json: {success: "Success updated Person"}
        else
            render json: {error: "Failed updating Person"}
        end
    end

    def next_id
        person = Person.all.sort_by(&:id)[-1]
        if person
            render json: {next_id: person.id + 1}
        else
            render json: {next_id: 1}
        end
    end

    private

    def person_params
        params.permit(:name, :color)
    end

    private

    def person_params_update
        params.require(:person).permit(:name, :color)
    end
end
