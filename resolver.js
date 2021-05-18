const axios = require("axios");
const baseUrl = "http://localhost:3000/api/tasks";

const resolvers = {
  Query: {
    getTasks: async () => {
      const data = await axios(baseUrl).then(res => res.data);
      return data;
    }
  },

  Mutation: {
    createTask: async args => {
      const taskData = {
        task: args.task
      };

      const data = await axios({
        method: "post",
        url: baseUrl,
        data: taskData
      }).then(res => {return res.data});
    },

    deleteTask: args => {
      const taskData = {
        _id: args.id
      };
      axios({
        method: "delete",
        url: baseUrl,
        data: taskData
      });
    }
  }
};

module.exports = resolvers;
