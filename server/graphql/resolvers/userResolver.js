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
          role: input?.role
        })
        const createdUser = await userCollection.findOne({ _id: user.insertedId })
        return createdUser
      }catch (e){
        throw new Error(e)
      }
    },
    
    editUser: async (_, { input }, { req, res, client }) => {
      try{
        const userCollection = await client.db("next-auth").collection("user")
        await userCollection.updateOne({_id: new ObjectId(input?._id)},{$set:{
          name: input?.name,
          email: input?.email,
          role: input?.role
        }})
        
        const updatedUser = await userCollection.findOne({ _id: new ObjectId(input?._id) })
        return updatedUser
      }catch (e){
        throw new Error(e)
      }
    },
  }

}