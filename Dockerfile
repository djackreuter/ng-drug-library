FROM node:9

# Install apt based dependencies required to run Rails as 
# well as RubyGems. As the Ruby image itself is based on a 
# Debian image, use apt-get to install those.
RUN npm install -g @angular/cli

# Configure the main working directory. 
RUN mkdir -p /ng-drug-library
WORKDIR /ng-drug-library

# Copy the Gemfile as well as the Gemfile.lock and install 
# the RubyGems. This is a separate step so the dependencies 
# will be cached unless changes to one of those two files 
# are made.
COPY package.json ./
# RUN gem install bundler && bundle install --jobs 20 --retry 5
RUN npm install

# Copy the main application.
COPY . /ng-drug-library

# Expose port 3000 to the Docker host, so it can be accessed 
# from the outside.
EXPOSE 4200

# Configure an entry point, so "bundle exec" doesnt
# need to be specified for each command.
# ENTRYPOINT ["bundle", "exec"]

# The main command to run when the container starts. Also 
# tell the Rails dev server to bind to all interfaces by 
# default.
CMD ["ng", "serve", "--host", "0.0.0.0"]