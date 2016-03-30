#!/bin/bash

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudo apt-get update -y
sudo apt-get install -f -y

# Install zip
sudo apt-get install -y unzip
wget https://chromedriver.storage.googleapis.com/2.20/chromedriver_linux64.zip
sudo unzip -uq -d /usr/local/bin chromedriver_linux64.zip && sudo chmod a+r,a+x /usr/local/bin/chromedriver
