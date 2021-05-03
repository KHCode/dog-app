# DogPix
This is a simple I built with StencilJS and the Dog CEO API. It's mostly written in Typescript, which I had never written in before, so that was a lot of fun to use.

## How I Built This App
The following is a simplified description of the process I went through in creating this app. 
1. Reviewed the docs for StencilJS and the Dog API
2. Created a GitHub repo and cloned it locally
3. Initialized a StencilJS project in my local repo and pushed changes to GitHub
4. Checked that the install worked by starting the server
5. Watched some tutorials on how to use Stencil along with reading the docs to start making changes
6. Cleaned out all the default stencil code that I don't need from the project
7. Added static image and select menu components to app
8. Added logic for dynamically building select menu in the render statement
9. Created new git branch for implementing the business logic for communicating with the Dog CEO API
10. Implemented the API logic in the select menu component
11. Raised state by moving the API logic up into the app-home component and passing data down into select menu component
12. Used the data gathered in the app-home component to pass down the image url to the image component
13. Used the data gathered in the app-home component to pass down the value of the current selection into a button for better UX when user wants to look at another pic of the same dog breed
14. Once this was all working, I merged the feature branch for the api logic into the main branch
15. Forked a new branch for implementing social media sharing, then once this feature was working, merged it with main

## Running Locally

To run this locally, clone the repo

    git clone https://github.com/KHCode/dog-app.git

Once you have this downloaded, you are going to need to move into the inner dog-app directory:

    cd dog-app

From there, you can run 

    npm start

The main branch is the working branch, and everything should work if you run the server from that branch.
> Written with [StackEdit](https://stackedit.io/).
