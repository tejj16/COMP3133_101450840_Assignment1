const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const schema = require('./graphql/typeDefs');
const rootResolver = require('./graphql/rootResolver');

// 1. Connect to MongoDB
connectDB();

// 2. Initialize Express app
const app = express();

// 3. Setup GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true, 
  })
);

// 4. Start listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

