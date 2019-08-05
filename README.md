# online-store

This project is a full stack app with a backend providing RESTful graphql API. There are two frontends for admin and guest/member. Both of the frontends implements responsive design.

#### Admin Frontend: You can Create, Remove, Update or Delete products. Further, you can view orders and mark them canceled, confirmed or delivered.

#### Guest/Member Frontend: You can view products in shop, sort items by categories and add them to cart. Once you have more than one item in cart you checkout and fill delivery details before placing order. Orders placed here will reflect on admin frontend.

# Technologies Used

## Admin/Member Frontends:

-   React
-   Redux
-   Redux Thunk
-   Graphql
-   Apollo Client
-   React bootstrap
-   materialize-css
-   SASS

## Backend:

-   Node/Express
-   CORS
-   jsonwebtoken
-   Apollo server express
-   Mongoose
-   subscriptions-transport-ws

# Usage

## Backend

### Requirements:

-   MongoDB connection: In dev mode add file `dev.js` similar to `prod.js` where `MONGOR_URI` is your mongodb access uri, and, a `JWT_SECRET`. Or provide these as environment variables if running in production.

### Steps:

1. Clone repo
2. `npm install`
3. `npm start`

## Admin/Member Frontends:

### Requirements:

-   Backend API: When running in production replace `REACT_APP_BACKEND_URL` in `.env` with your address of your backend api.

# Demos

-   Backend: https://online-store-mern.herokuapp.com

-   Admin frontend: https://hungry-turing-8a8158.netlify.com/

-   Member frontend: https://vibrant-einstein-a62bb4.netlify.com/
