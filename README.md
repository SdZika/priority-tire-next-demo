Tire E-Commerce - Next.js App

This is a Next.js (Page Router) e-commerce project for selling tires. The project is set up using create-next-app and utilizes Magento 2 as the backend via GraphQL.

Tech Stack

Next.js (Page Router) - Framework for React applications.

Magento 2 - Backend e-commerce platform, set up using Mark Shust's Docker Magento.

GraphQL - Used to fetch data from Magento 2.

Apollo Client - Handles GraphQL queries.

MUI (Material-UI) - Component library for UI design.

Getting Started

Prerequisites

Make sure you have the following installed:

Node.js (Recommended: LTS version)

Yarn (or use npm)

Installation

Clone the repository:

git clone https://github.com/your-repo-name.git
cd your-repo-name

Install dependencies:

yarn install  # or npm install

Running the Development Server

yarn dev  # or npm run dev

Open http://localhost:3000 in your browser to see the app.

Magento 2 Setup

The backend is set up using Mark Shust's Docker Magento. Ensure your Magento 2 instance is running before making GraphQL queries.

Start Magento 2 Docker containers:

docker-compose up -d

Access Magento 2 admin panel at:

http://localhost:8080

GraphQL Endpoint

Magento 2 GraphQL API is available at:

http://localhost:8080/graphql

Notes

This project is a demo.

Data is currently pulled from a mock object, as Magento 2 is not properly set up.

Learn More

For further learning:

Next.js Documentation

Magento 2 GraphQL Guide

Apollo Client Documentation

