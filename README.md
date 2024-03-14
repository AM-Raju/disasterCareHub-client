# Disaster Care Hub - Aid management hub

## Project Summery

This is a web app of disaster aid management company named Disaster Care Hub. It helps to provide the good overview of this company.

#### Features:

This web application has functionality for both general user and registered user. General user can see all information of this website. But a registered user have the access to the dashboard. By using dashboard he can create, delete, or update a supply aid.

Here is a Leaderboard page where donors are listed down on the basis of their contribution. User can share their thought on the community page. There is also us option for the visitor to be a volunteer.

There is also profile, All Users, Create Supply, All Supplies, Create Testimonial pages available on the dashboard.

It has a register page to register the user. And then he can login to access the full functionality of this web app. User authentication is protected by all Json Web Token.

This website is responsive for all device.

#### Used technologies:

- React - TypeScript
- Tailwind CSS
- Daisy UI
- Framer motion
- AOS
- Express JS as server.
- MongoDB as database.

Live URL: `https://disaster-care.netlify.app/`

Live server: `https://disaster-care-hub-s2.vercel.app/`

========================================================

### Cloning the Vite React Project

#### Install Git:

Make sure you have Git installed on your machine.

#### Clone the Repository:

Open a terminal and navigate to the directory where you want to clone the project. Run the following command.

`git clone https://github.com/AM-Raju/disasterCareHub-client`

#### Navigate to Project Directory:

Change your working directory to the cloned project folder.

` cd your-project-folder`

========================================================

### Installing Dependencies

#### Install Node.js

Ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [Node.js official website](https://nodejs.org/en).

#### Install Project Dependencies

Run the following command to install the project dependencies.

`npm install
`

#### Run the Development Server

To run the development server, use the following command.

`npm run dev
`

========================================================

## # Vite template guide (Follow if necessary)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
