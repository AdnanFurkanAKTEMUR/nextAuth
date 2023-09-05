const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcryptjs')
module.exports = {

  Query: {
    getAllUser: async (_, { input }, { req, res, client }) => {
      const userCollection = await client.db("next-auth").collection("user")
      const users = await userCollection.find({}).toArray()
      return users
    }
  },

  Mutation: {
    createUser: async (_, { input }, { req, res, client }) => {
      try{
        const userCollection = await client.db("next-auth").collection("user")
        const encriptedPass = await bcrypt.hash(input?.password, 10)
        const user = await userCollection.insertOne({
          name: input?.name,
          password: encriptedPass,
          email: input?.email,
        })
        const createdUser = await userCollection.findOne({ _id: user.insertedId })
        return createdUser
      }catch (e){
        throw new Error(e)
      }
    },
    loginUser:async (_, { input }, { req, res, client }) => {
      try{
        const userCollection = await client.db("next-auth").collection("user")
        const user = await userCollection.findOne({ email: input?.email })
        const dogrula = await bcrypt.compare(input?.password, user.password)
        if(dogrula && user){
          return true
        }else {
          return false
        }
      }catch (e){
        throw new Error(e)
      }
    },
  }

}