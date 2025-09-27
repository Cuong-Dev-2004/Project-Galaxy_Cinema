import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        title: {
            type: String,
            required: true
        },
        trailer_url: {
            type: String
        },
        poster_url: {
            type: String
        },
        rating: {
            type: Number
        },
        age_rating: {
            type: String
        },
        producers: {
            type: [String]
        },
        genres: {
            type: [String]
        },
        director: {
            type: String
        },
        actors: {
            type: [String]
        },
        description: {
            type: String
        },
        plot: {
            type: String
        },
        release_date: {
            type: Date
        },
        duration: {
            type: Number
        },
        language: {
            type: String
        },
        status: {
            type: String,
            enum: ["now_showing", "coming_soon"],
            default: "coming_soon"
        },
        formats: {
            type: [String],
            enum: ["2D", "3D", "IMAX", "4DX"],
            default: ["2D"]
        }
    },
    { timestamps: true }
);

export default mongoose.model("Movie", MovieSchema);
