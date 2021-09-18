# Web Page Word Count Project 

----------

## Introduction

This application accepts https website URLs and shows a list of unique words and the amount of times they appear throughout the websites DOM.

Notes:

As this is my first Typescript project I used the following resources to bootstrap myself: 

https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/

A lot of the framework was influenced by this tutorial which uses create-react-app for the client and a model controller approach for the server.

The core logic is my own.

## Setup

Runtime Requirements: yarn

Dependencies: axios, cheerio, express, puppeteer

This project currently requires yarn to be installed manually to run, but will be dockerized in the future for an easier setup.

## Installation and Running

In order to install the project, download the project to a directory of your choice.

In a terminal navigate to the server directory and run `yarn start`.

In a separate terminal navigate to the client directory and run `yarn start`.

In a web browser of your choice navigate to http://localhost:3000/

You should now see a webpage asking you to enter a URL. 

After entering a valid URL you should get a list of the words from the DOM of the provided URL.

NOTE: Only https URLs are accepted at this time.

## Tech Stack Decisions

React was used for its ease of use in displaying and managing html elements.

Axios was used to on the client side to set up an easy to read API, letting the tool handle the nitty gritty details of HTTP requests.

Express was used on the server side to intercept calls from the client and start the word count process.

Puppeteer was used to access web pages that might normally block normal https access.

Cheerio was used to traverse the DOM of the html returned by puppeteer as this seemed to be the easiest to use DOM parser with satisfying results. 

## Future Considerations

1. More robust error handling, including but not limited to: valid URL input detection, website error response handling, display error messages to users
2. Unit Tests
3. Test Coverate Support for unit tests
4. Dockerize
5. Providing options for the user to sort the data
6. Handling extremely large input text through block processing
7. Pagination for large data responses
8. Indication that the 
