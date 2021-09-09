const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const firebase = require("firebase/app")
require("dotenv").config();

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const firebaseClient = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
})

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return {
         headers: req.headers,
         firebaseClient
      };
    }
  });
  await server.start()
  server.applyMiddleware({ app });
  await app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });
  app.get('/', (req, res) => { //Line 9
    res.send({ express: 'hello' }); //Line 10
  });
  await app.listen({ port: 8000 }, () => {
    console.log("Server has started 🚀 http://localhost:8000");
  });
}

startApolloServer(typeDefs, resolvers) 