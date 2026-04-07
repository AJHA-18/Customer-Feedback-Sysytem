const bcrypt = require('bcryptjs');
const db = require('./database');

const username = 'admin';
const email = 'admin@admin.com';
const password = 'admin123';
const role = 'admin';

const hashedPassword = bcrypt.hashSync(password, 10);

setTimeout(() => {
  db.query(
    `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
    [username, email, hashedPassword, role],
    function (err) {
      if (err) {
        console.log('Admin already exists or error:', err.message);
      } else {
        console.log('✅ Admin user created successfully!');
        console.log('Username: admin');
        console.log('Password: admin123');
      }
      process.exit();
    }
  );
}, 1000);