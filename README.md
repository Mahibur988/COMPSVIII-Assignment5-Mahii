# Assignment #7 – CI/CD Pipeline for Recipe Sharing Application

## Project Overview

This project is a full-stack Recipe Sharing Application built using React for the frontend and Node.js with Express for the backend.

For Assignment #7, I added automated testing and a Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions. The main goal was to automatically test the application whenever new code is pushed to GitHub.

## Technologies Used

- React.js
- Node.js
- Express.js
- SQLite
- JavaScript
- Jest
- Supertest
- Vitest
- React Testing Library
- Git and GitHub
- GitHub Actions
- Docker and Docker Compose

## Project Structure

```text
COMPSVIII-Assignment5-Mahii/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── backend/
│   ├── test/
│   │   └── api.test.js
│   ├── database.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   └── test/
│   │       ├── App.test.jsx
│   │       └── setup.js
│   ├── package.json
│   ├── vite.config.js
│   └── package-lock.json
│
├── cloudbuild-backend.yaml
├── cloudbuild-frontend.yaml
├── docker-compose.yml
└── README.md
```

## Automated Testing

I created automated tests for both the backend and frontend.

### Backend Tests

The backend uses Jest and Supertest to test the API endpoints.

There are 5 backend tests:

1. Check the API health endpoint.
2. Get all recipes.
3. Reject a recipe with missing fields.
4. Create a new recipe.
5. Return a 404 error for a missing recipe.

To run backend tests locally:

```bash
cd backend
npm install
npm test
```

### Frontend Tests

The frontend uses Vitest and React Testing Library.

There are 6 frontend tests:

1. Display the application heading.
2. Display the Add New Recipe form.
3. Display the recipes section.
4. Display a message when there are no recipes.
5. Allow users to enter a recipe name.
6. Fetch recipes when the application loads.

To run frontend tests locally:

```bash
cd frontend
npm install
npm test
```

To build the frontend:

```bash
npm run build
```

## GitHub Actions CI/CD Pipeline

I created a GitHub Actions workflow file at:

`.github/workflows/ci-cd.yml`

The workflow automatically runs when code is pushed to the main branch or when a pull request is created for the main branch.

The pipeline contains two jobs:

### 1. Backend Tests

- Checks out the repository.
- Sets up Node.js.
- Installs backend dependencies.
- Runs all backend tests.

### 2. Frontend Tests

- Checks out the repository.
- Sets up Node.js.
- Installs frontend dependencies.
- Runs all frontend tests.
- Builds the frontend application.

If a test fails, GitHub Actions reports the failed job.

## Pipeline Execution Results

During testing, I intentionally changed an expected result in one backend test to create a failure.

GitHub Actions detected the problem:

- Backend Tests: Failed.
- Frontend Tests: Passed.

After that, I corrected the test and pushed the updated code to GitHub.

The final pipeline completed successfully:

- Backend Tests: Passed (5/5).
- Frontend Tests: Passed (6/6).
- Frontend Build: Successful.

This helped me understand how automated testing can identify problems before changes are accepted into the project.

## Repository Link

GitHub Repository:

https://github.com/Mahibur988/COMPSVIII-Assignment5-Mahii

## Conclusion

This assignment helped me understand how CI/CD pipelines work in real software development. I learned how to create automated tests, configure GitHub Actions, identify failing tests, and fix problems before accepting code changes. Overall, automated testing makes the development process faster and helps improve software reliability.