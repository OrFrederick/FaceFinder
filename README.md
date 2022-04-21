# Getting started

First, you need to install Ruby and [Rails.](https://www.tutorialspoint.com/ruby-on-rails/rails-installation.htm) You also need a RaspberryPi connected to a camera module.

## Install Postgres

- `sudo apt update`
- `sudo apt install postgresql postgresql-contrib libpq-dev`
- Create a Postgres user
  - `sudo -u postgres createuser -s <username> -P`

## Set environment variables

- `echo 'export FaceFinder_DATABASE_USERNAME="<username>"' >> ~/.bashrc`
- `echo 'export FaceFinder_DATABASE_PASSWORD="<PostgreSQL_Role_Password>"' >> ~/.bashrc`
- Create `recognition\.env` and fill it with `STREAM_URL="tcp://<YOUR_IP>:3333"`

## Database setup

- Inside /facefinder_api/
  - rails db:create && rails db:migrate

## Run the Project

- Inside /facefinder_api/ run `rails server`
- Inside /recognition/ run `python3 main.py`
- On your RaspberryPi run `raspivid -t 0 -n -b 1000000 -g 30 -ih -pf baseline -w 640 -h 480 -fps 30 -l -o <STREAM_URL>`
