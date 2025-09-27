import MovieSchema from "../models/MovieSchema";

function MovieControllers() {

    RegisterMovie = async (req, res) => {
        try {
            const {
                title,
                trailer_url,
                poster_url,
                rating,
                age_rating,
                producers,
                genres,
                director,
                actors,
                description,
                plot,
                release_date,
                duration,
                language,
                status,
                formats

            } = req.body;
            if (!title) {
                return res.status(400).json({ error: "Title is required" });
            }
            let count = await MovieSchema.countDocuments();
            const customId = "mv" + count;
            const mvSchema = new MovieSchema({
                id: customId,
                title,
                trailer_url,
                poster_url,
                rating,
                age_rating,
                producers,
                genres,
                director,
                actors,
                description,
                plot,
                release_date,
                duration,
                language,
                status,
                formats
            });
            await mvSchema.save();
            res.status(200).json(mvSchema)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    DeleteMovie = () => {
        try {
            const { id } = res.body;
            if (!id || id.trim() === "") {
                return res.status(400).json({ error: "id is required" });
            }
            const result = MovieSchema.findOneAndDelete({ id: "mv" + id });
            if (result) {
                res.status(200).json("Movie deleted successfully")
            } else {
                console.log('No Movie found with that id.');
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    UpdateMovie = () => {
        try {
            const {
                title,
                trailer_url,
                poster_url,
                rating,
                age_rating,
                producers,
                genres,
                director,
                actors,
                description,
                plot,
                release_date,
                duration,
                language,
                status

            } = req.body;
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    FindMovie = () => {
        try {

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default MovieControllers;