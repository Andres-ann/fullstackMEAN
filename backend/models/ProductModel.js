import mongoose from 'mongoose';

//schema
const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "please complete this field"]
    },
    stock: {
        type: Number,
        required: [true, "please complete this field"]
    },
    price: {
        type: Number,
        required: [true, "please complete this field"]
    }
},
    {
        timestamps: true,
        versionKey: false
    });

//modelo a partir del esquema
export const ProductModel = new mongoose.model("Product", productSchema);