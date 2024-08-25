import { Client } from "pg";

export const fetchInfo = async (db, query, values) => {
	const client = new Client({
		user: "",
		host: "",
		database: db,
		password: "",
		port: "",
	});
	try {
		await client.connect();
		let res = await client.query(query, values);
		return res;
	} catch (err) {
		console.error("Error executing database query:", err);
		throw err;
	} finally {
		await client.end();
	}
};
