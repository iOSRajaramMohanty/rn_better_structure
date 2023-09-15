# React Native Better Structure

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

# Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
- [react-native-mmkv-storage](https://github.com/ammarahm-ed/react-native-mmkv-storage#readme) as storage solution.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

# Folder structure
This template follows a very simple project structure:

- src: This folder is the main container of all the code inside your application.
    * `actions:` This folder contains all actions that can be dispatched to redux.
    * `assets:` Asset folder to store all images, vectors, etc.
    * `components:` Folder to store any common component that you use through your app (such as a generic button)
    * `constants:` Folder to store any kind of constant that you have.
    * `controllers:` Folder to store all your network logic (you should have one controller per resource).
    * `localization:` Folder to store the languages files.
    * `navigation:` Folder to store the navigators.
    * `reducers:` This folder should have all your reducers, and expose the combined result using its index.js
    * `screens:` Folder that contains all your application screens/features.
        * `Screen:` Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
            * `Screen.js`
            * `Screen.styles.js`
            * `Screen.test.js`
    * `selectors:` Folder to store your selectors for each reducer.
    * `storage:` Folder that contains the application storage logic.
    * `store:` Folder to put all redux middlewares and the store.
    * `test-utils:` Folder to store tests-related utilities and components.
    * `theme:` Folder to store all the styling concerns related to the application theme.
    * `App.js:` Main component that starts your whole app.
    * `index.js:` Entry point of your application as per React-Native standards.
