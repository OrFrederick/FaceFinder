# Getting started

First, you need to install Ruby and [Rails](https://www.tutorialspoint.com/ruby-on-rails/rails-installation.htm)

## Install Postgres

- `sudo apt update`
- `sudo apt install postgresql postgresql-contrib libpq-dev`
- Create a Postgres user
  - `sudo -u postgres createuser -s <username> -P`

## Set environment variables

- `echo 'export FaceFinder_DATABASE_USERNAME="<username>"' >> ~/.bashrc`
- `echo 'export FaceFinder_DATABASE_PASSWORD="<PostgreSQL_Role_Password>"' >> ~/.bashrc`
- Create `recognition\.env` and fill it with `STREAM_URL="tcp://<YOUR_IP>:3333"`
