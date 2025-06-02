import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function getUserByEmail(email) {
  const query = 'SELECT * FROM users WHERE email = ?';
  const [rows] = await db.query(query, [email]);
  return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
}
