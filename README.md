# cs465-fullstack
CS-465 Full Stack Development with MEAN


## Architecture
#### Compare and contrast the types of frontend development you used in your full-stack project, including Express HTML, JavaScript, and the single-page application (SPA).

The Express HTML application has 3 files per application page: a route file, a controller file, and a view file. The routes are defined in the app.js file at the root directory of the project and it tells the application which router file to pass the user to based on the route of the request. The page’s route file then transfers the request to the appropriate controller file. The controller is used to gather and format any data needed for the page and send that to the view. The controller may make API requests to the backend to obtain this information. The view formats the data from the controller and displays it to the user.

On the other hand, the Angular project is broken down into components rather than pages. Each component has a CSS file, an HTML file, and a typescript file. The routes are handled in the app-router-module.ts file in the app directory of the Angular application. This file displays the correct component based on the user’s request. The component’s CSS file handles the styling for that specific component. The typescript file holds all of the methods that the component’s front-end needs such as submit methods. This file is in charge of calling the TripDataService helper object that handles all of the API calls. The HTML file is the front-end of the application that users interact with. These interactions are sent to the typescript file for processing.

#### Why did the backend use a NoSQL MongoDB database?

Using a NoSQL database gave us a lot of flexibility when it came to the type of data we stored. We weren't limited to a defined set of attributes set by columns in SQL databases. We were able to store custom objects for each trip and user. MongoDB also integrated nicely with our Express backend using Mongoose.

## Functionality
#### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is a data-interchange format while Javascript is a programming language. JSON ties together the frontend and backend because the backend sends data to the frontend in JSON format. The frontend can read the data in this format, making the pages dynamic and easy to change.


#### Provide instances in the full-stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.
I refactored the navbar of the Angular SPA application into its component. This allowed me to add it on each page easily and modify the links on the navbar to change as the user's login status changed

## Testing
#### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.

Methods are blocks of code that produce the logic for an application. Methods can take in parameters and produce some sort of outcome. Endpoints are fired when a user makes a specific request. For example, when a user hits the GET /trips endpoint on my application, they receive a JSON list of all of the trips stored in the database. Security is very important in a full-stack application. Users should be authenticated on each API request to ensure that valuable information isn't being leaked to untrustworthy people.

## Reflection
#### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
 I have learned a lot about how to use the MEAN stack to produce a full-stack application. I have experience using REACT and SQL, but the MEAN stack is a whole different animal. It was great to be able to learn Angular as it is an industry-leading frontend software and I'm sure I'll need to use it at some point in my career.
