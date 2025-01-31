# Hello World React App with CI/CD

This is a modern React application built with TypeScript, Vitest for unit testing, and CI/CD pipelines configured with GitHub Actions. The app is deployed continuously to AWS Amplify, ensuring that the latest changes are always live.

## Features

- **React + TypeScript**: A powerful, type-safe framework for building modern web applications.
- **Vitest**: A fast unit testing framework integrated into the app for testing the components and logic.
- **CI/CD with GitHub Actions**: Automates testing, building, and deployment processes.
- **AWS Amplify**: Continuous deployment setup for automatic production deployment every time changes are pushed to the repository.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-react-app.git
   cd my-react-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser and go to http://localhost:5173/

## Testing

This project uses Vitest for testing the React components and logic. To run the tests:

```bash
npm run test
```

The tests will run in watch mode, so any changes to your code will trigger the tests automatically.

## CI/CD

The project is configured with GitHub Actions for continuous integration and continuous deployment (CI/CD). The workflow is triggered on every push to the repository, ensuring that tests are run, the build is created, and the application is deployed automatically.

## GitHub Actions Workflow

- Test & Build: Every push to the main branch runs tests and builds the app.
- Deploy to AWS Amplify: Upon successful tests and build, the app is automatically deployed to AWS Amplify.

## CI/CD Pipeline Overview

1. Push changes to the GitHub repository (e.g., main branch).
2. GitHub Actions runs the test suite using Vitest.
3. If tests pass, GitHub Actions builds the app.
4. AWS Amplify automatically deploys the built app to production.
