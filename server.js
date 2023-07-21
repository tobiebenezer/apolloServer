const path = require('path')
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
// const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require('apollo-server-express');


const typesArray = loadFilesSync(path.join(__dirname,'**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'));

//usin apollo
async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
      typeDefs: typesArray,
      resolvers:resolversArray,
  });

  const server = new ApolloServer({
    schema
  });

  await server.start();
  server.applyMiddleware({app, path:"/graphql"});

  app.listen(3000, () => {
    console.log("Running GraphQl server ...");
  });

}

startApolloServer();


// const schema = makeExecutableSchema({
//     typeDefs: typesArray,
//     resolvers:resolversArray,
// });

// const root = {
//   products: require('./products/products.model'),
//   orders: require('./orders/orders.model'),
// };

// using qraphqlHttp
// const app = express();
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     // rootValue: root,
//     graphiql: true,
//   })
// );


