
# Job Ad Product Cart

This project is technical test that has been completed for SEEK see details of [coding exercise](./docs/Software%20Engineer%20Code%20Challenge%20-%20Jan%2019.pdf).

## The Solution

The project was created with 'create-react-app'.

The solution provided is Frontend only solution. It utilizes React & TypeScript for implementation and Jest / Jasmine for unit testing.

The solution provides a basic visualization of cart to interact with.

Run the project with `npm start` and run the unit tests with `npm run test`

## Development

The the coding exercise was split into several features branches. With master containing all the merged branches together to deliver the final solution.

## Building planning
Before begging work I put together a quick build plan identifying the features I would need which were used to complete minimum viable solution. This plan informed the split of feature branches. Each feature branch has been numbered in the order they were completed.

The master branch contains the final solution.

## Considerations
*  I would not advise doing any actual price calculations handling client side for the obvious security issues and problems with JavaScripting natively no being able to represent some decimals numbers with perfect accuracy.

## Potential Improvements

* Add tslint and tslinting rules to ensure code syntax / style consistent.
* Re-organize folder structure to by feature.
* Add some e2e tests.
* Replace semantic UI CDN reference with local copy.
* Add barrels (import roll ups) for folders like `utils` and `api`.
* Displays the active offers in a offers table column.
* Remove usages of inline styles in favor of css files and classNames.
 

## Application Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

####`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
