import Client from "pg";

export const client = async (db, query, values) => {
	const client = new Client({
		user: "",
		host: "",
		database: db,
		password: "",
		port: "",
	});
	try {
		await client.connect();
		const res = await client.query(query, values);
		return res;
	} catch (e) {
		console.error("Error executing db query: " + e.message);
		throw e;
	} finally {
		await client.end();
	}
};
