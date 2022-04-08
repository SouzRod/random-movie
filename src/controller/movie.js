const { getMovies } = require('../service/tmdb');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const get = async (req, res) => {
	const page = getRandomInt(1, 100);
	const response = await getMovies(page, 'pt-BR');

	const movieNumber = getRandomInt(1, response.length);

	const {
		poster_path,
		title,
		overview
	} = response[movieNumber];

	return res.json({
		backdrop_path: `https://image.tmdb.org/t/p/w500${poster_path}`,
		title,
		overview
	}).status(200);
};

module.exports = { get };