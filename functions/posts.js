const { createClient } = require('@astrajs/collections');
const collection = 'tkmkposts';

exports.handler = async function (event, context, callback) {
	// create an Astra client
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const posts = astraClient
		.namespace(process.env.ASTRA_DB_KEYSPACE)
		.collection(collection);

	try {
		const post = await posts.find();
		return {
			statusCode: 200,
			body: JSON.stringify(post),
		};
	} catch (e) {
		console.log(e);
		return {
			statusCode: 500,
			body: JSON.stringify(e),
		};
	}
};
