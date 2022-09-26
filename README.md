# GIF search engine
This project was bootstrapped with Create React App.

application takes word, phrase or sentence and produce a most relevant 5 GIF images and display to the user.

![gif-search](assests/gif-search-app.gif)

## Installation

To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Yvvie/Gif-Search

# Go into the repository
$ cd Gif-Search

# Install dependencies
$ npm install

# Run the app
$ npm start
```

It runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Requirement

Based on https://developers.giphy.com/docs/api you need to register and go to your GIPHY Developer Dashboard. Get started by creating an app, where you will be assigned a beta API key, copy the key and paste it inside the API fetch params.
``` bash
axios("https://api.giphy.com/v1/gifs/search", {
  params: {
    api_key: "your API key",
  },
```
## Technologies Used

HTML
CSS
JavaScript
ReactJS

## Contributing
This software uses the following open source packages:

axios - https://www.npmjs.com/package/react-axios
