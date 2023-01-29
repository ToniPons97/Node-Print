
# Node-Print

**Node** server to print documents using **HTTP**.

## To use this we need:

1. a computer (in my case this is running on a Raspberry Pi 3B+)
2. Node.js

## NPM Packages in use

1. http
2. fs
3. formidable
4. child_process

### How to Install

Open the terminal, go inside the project directory and run **npm i** to install the required packages.

## Basic Setup

You need a printer, a computer (preferably a raspberry pi) with the printer's driver installed and a usb port to connect your printer. I suggest you assign a static IP address for the computer.

Then you run **npm start** to start the server and check that the server is running by visiting the page's index.html...

**The default port is set to 8081**.

## Run service at startup

This medium [blog](https://medium.com/going-fullstack/run-node-js-apps-when-your-raspberry-pi-boots-up-345b7e6fcf4f) does a great job guiding you through this process.
