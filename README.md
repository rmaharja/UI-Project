# A Simple responsive UI design using React (in 3 hours total)
Deployed: https://responsive-react-ui.herokuapp.com/

### Some Key Decisions:
* Used vh & vw for font size; used percent for padding and margin whenever possible for a more responsive UI (especially without media queries)
* Set default number of columns to 3 and default row height to 400px so the user can visualize the app.
* Set max number of columns to 47 because any value greater than 47 distorts the columns
* Manually created the Red Fire logo for "side nav" using Adobe Photoshop 

### Things to work on (did not get to it in 3 hrs):  
* CSS Animation using keyframes for changing number of columns and row height
* Adding media queries for more responsiveness for smaller screens.
* Find exact font to match the given design
* Match the sizing of the image better
* Possibly make the left "Side Bar" collapsable in smaller screen sizes, depending on the use of the application (depends on purpose of the application)
* Using "NavLink" tags (import from "react-router-dom") instead of "a" tags for green and red tabs to track active tags
* Testing designs on more/older browsers and different screen sizes/devices
* Refactoring to make code more efficient/clean
* Refactor componenets to make it easier to understand
* Adding more comments to the code to make it easier for other developers to understand the code
* Adding redux to make it easier for state management
* Changing the method of displaying the message for exceeding max number of columns (sending a clean message instead of an alert)
* Adding Aria Accessibility
