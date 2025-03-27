// const {Mens, Womens, Accessory, Houseware} = require('../models')
import { Mens, Womens,  Houseware, Accessory } from '../models'

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    mens: async () => {
      // Get and return all documents from the mens collection
      try {
        return await Mens.find();
      } catch (error) {
        console.error('Failed to fetch Mens:', error)
      }
    },
    menSingleProd: async (parent, { id }) => {
      try {
        return await Mens.findById(id);
      } catch (error) {
        console.error('Failed to fetch Mens:', error)
      }
    },
    womens: async () => {
      try {
        return await Womens.find();
      } catch (error) {
        console.error('Failed to fetch Mens:', error)
      }
    },
    womenSingleProd: async (parent, { id }) => {
      try {
        return await Womens.findById(id);
      } catch (error) {
        console.error('Failed to fetch Mens:', error)
      }
    },
    accessories: async () => {
      try {
        return await Accessory.find();
      } catch (error) {
        console.error('Failed to fetch Mens:', error)
      }
    },
    accessorySingleProd: async (parent, { id }) => {
      try {
        return await Accessory.findById(id);
      } catch (error) {
        console.error('Failed to fetch Mens:', error)
      }
    },
    housewares: async () => {
      try {
        return await Houseware.find();
      } catch (error) {
        console.error('Failed to fetch Mens:', error)
      }
    },
    housewareSingleProd: async (parent, { id }) => {
      try {
        return await Houseware.findById(id);
      } catch (error) {
        console.error('Failed to fetch Mens:', error)
      }
    }

  }
};

export default resolvers;
