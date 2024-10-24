# Template for Micro Frontends with Module Federation

This repository template leverages the module federation paradigm to facilitate efficient code sharing across micro frontends. It uses Webpack as the bundler, TypeScript for type safety, Babel for JavaScript transpilation, and Tailwind CSS for styling. Designed to streamline the setup process, this template accelerates the creation of new repositories for micro frontend applications.

## Creating a New Micro-Frontend

Run the following command in your terminal, replacing name_of_new_project with your desired project name:

`npx degit git@github.com:jigjoy-io/module-federation-template.git#main name_of_new_project`

## Running Instructions 

To run a new micro-frontend project follow these steps:

### Navigate to the Project Directory

Change into your new project directory:

`cd name_of_new_project`

### Install Dependencies

Install the required dependencies by running:

`yarn install`

### Run the Development Server

Start the development server with:

`yarn start`

Your new micro-frontend project is now set up and running. You can start developing your application using Webpack, TypeScript, Babel, and Tailwind CSS.

## Build the Project

To build the project, run:

`yarn build`

This will create a `dist` folder where the built files will be regenerated each time you run this command.

## Tanstack

*This template includes **TanStack Router** for handling routing efficiently and type-safely. It provides flexibility and performance improvements with modern routing features.*

- Default 404 Page: A built-in *NotFoundRoute* component handles unknown routes, ensuring users see a friendly "404 - Not Found" message when navigating to non-existent pages.

- Code Splitting with `createLazyFileRoute`: We optimize your app's performance by splitting code at the route level. This means only the code required for a specific route is loaded, reducing initial load times and improving overall app speed.

- Route Generation: With the command `yarn generate-routes`, you can automatically generate route definitions based on your files, simplifying the process of adding new routes to your application.

## Tailwind

*This template includes **TailwindCSS**, a utility-first CSS framework that helps you build clean and responsive user interfaces effortlessly.*

Tailwind offers a utility-first approach to styling, making it easy to build responsive and modern user interfaces quickly. By using low-level utility classes, Tailwind reduces the need for custom CSS and helps maintain consistency across your project. This approach allows you to create complex designs directly within your HTML, resulting in faster development and more maintainable code.

## Redux

*This template includes **Redux Toolkit** as the state management solution, fully configured and ready to use*

 Redux simplifies state management in complex applications, allowing for predictable state transitions, easier debugging, and better maintainability through a unidirectional data flow.

- **State Management:** Redux is integrated with the configureStore method from Redux Toolkit.

- **Persistence:** State persistence is handled using redux-persist, ensuring certain parts of the state are saved to localStorage and restored upon refresh.