const { makeExecutableSchema } = require("@graphql-tools/schema")

const userType = require("./types/userType")
const userResolver = require("./resolvers/userResolver")

const schema = makeExecutableSchema({
  typeDefs: [userType],
  resolvers: [userResolver]
})

module.exports = schema