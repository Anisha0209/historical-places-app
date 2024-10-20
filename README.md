# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Install React, Redux, React Router, and Redux Thunk

### `npm install redux react-redux react-router-dom`

Install Redux-Observable and RxJS:

### `npm install redux-observable rxjs`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Historical Places App - Test Plan

1. Introduction
   This document outlines the test plan for the Historical Places App, developed using React or
   React Native. The app displays a list of historical places, allows users to mark places as
   visited, includes navigation between screens, and features a fun interactive element.
2. Scope
   The testing will cover:
    Data Management: Fetching and displaying historical places.
    Visited Places: Marking and unmarking places as visited with immediate UI updates.
    Fun Feature: Testing the interactive feature (e.g., random place suggestion).
    UI/UX Consistency: Ensuring a consistent design.
    State Management: Verification of Redux and Redux-Observable Epics.
    Routes and Navigation: Testing screen transitions, route handling, and navigation.
    Cross-Platform Consistency: For React Native, ensuring the app works on both
   iOS and Android.
3. Test Steps
   3.1 Data Management
    Open the app and ensure that historical places are fetched from the data source.
    Confirm that each place is displayed with its name, image, and description.
   3.2 Visited Places Functionality
    Mark a place as visited from the list screen.
    Verify that the UI updates immediately to reflect the place&#39;s visited status.
    Unmark the place as visited.
    Check that the UI updates accordingly to show the place as unvisited.
    Confirm that the Redux store is updated in real-time using React Hooks.
   3.3 Fun Feature
    Interact with the fun feature (e.g., press the random place suggestion button).
    Verify that a random place is suggested.
    Check that the suggested place is valid and appears correctly in the UI.
   3.4 Routes and Navigation
    Navigation Between Screens:
   o Tap on a historical place in the list to view its details.
   o Navigate back to the list screen.

o Use the back button on the device or app to ensure correct navigation.
o Verify that screen transitions are smooth and that the correct data is displayed
on each screen.

 Direct Navigation (Deep Linking):
o Open the app using a specific route or deep link.
o Ensure that the app opens on the correct screen.
o Confirm that the navigation stack is handled correctly.
 Navigation Behavior After Marking a Place:
o Mark a place as visited from the list screen.
o Navigate to the details screen of that place.
o Return to the list screen.
o Ensure that the visited status of the place is still correctly
