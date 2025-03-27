import { Schema, model } from 'mongoose';

const accessorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        imageURL: {
            type: String,
            required: true
        },
        attribution: {
            type: String,
        },
        category: {
            type: String,
        }
    }
);

const Accessory = model('Accessory', accessorySchema);

export default Accessory;