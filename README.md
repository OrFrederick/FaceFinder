# Getting started

## Install Rails

https://www.tutorialspoint.com/ruby-on-rails/rails-installation.htm

- Install Ruby
- sudo gem install rails

## Install Postgres

- sudo apt update
- sudo apt install postgresql postgresql-contrib libpq-dev
- Create a Postgres user
  - sudo -u postgres createuser -s <username> -P
- echo 'export FaceFinder_DATABASE_USERNAME="<username>"' >> ~/.bashrc
- echo 'export FaceFinder_DATABASE_PASSWORD="<PostgreSQL_Role_Password>"' >> ~/.bashrc
