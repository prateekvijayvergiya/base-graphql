const express = require("express");
const express_graphql = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolver");
const cors = require("cors");
const app = express();
app.use(cors());

const root = {
  tasks: resolvers.Query.getTasks,
  createTask: resolvers.Mutation.createTask,
  deleteTask: resolvers.Mutation.deleteTask
};

app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000, () => console.log("Graphql server is running"));
