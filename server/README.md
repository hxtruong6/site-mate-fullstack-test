# Issue Tracking System

> Using postman to test the API in **postmanAPIs folder**

**Description**

A simple REST API server for creating, reading, updating, and deleting issues, designed for demonstration purposes.

## Features

**Basic CRUD Operations:** Create, read, update, and delete issues.

**JSON Data:** Issues are currently stored in a local JSON file.
Getting Started

## Prerequisites

Node.js and npm (or pnpm) installed.

## Installation

Clone this repository

### Install dependencies

`pnpm install`

### Running the Development Server

`pnpm run start`

This will start the server, typically on port 3000 (<http://localhost:3001>).

## API Endpoints

- GET /issues - Returns a list of all issues.
- POST /issues - Creates a new issue.
- GET /issues/:id - Returns a specific issue by ID.
- PUT /issues/:id - Updates an existing issue.
- DELETE /issues/:id - Deletes an existing issue.

## Building for Deployment

`pnpm run build`
This will create a production-ready build of the server (if applicable).

### Potential Improvements

- Testing: Add unit and integration tests to ensure code quality and robustness.
- Database Integration: Replace the JSON file with a persistent database solution like PostgreSQL or MongoDB.
- Containerization: Package the application into a Docker container for easier deployment and portability.

## Technology Stack

- Node.js
- Express.js
- TypeScript
