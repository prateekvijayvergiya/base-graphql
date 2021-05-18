const { buildSchema } = require('graphql');
const schema = buildSchema(`
    type Query {
       tasks: [Tasks]
    },

    type Mutation {
        createTask(task: String!): Tasks,
        deleteTask(id: String!): Tasks!
    }

    type Tasks ${taskType}
`);


const taskType = `{
    _id: String
    task: String
}`
module.exports = schema;