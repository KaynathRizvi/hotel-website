const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'myhotel'
});

app.post('/login', (req, res)=> {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data)=> {
        if(err) {
            res.status(500).json({ message: "Login Failed" });
        } else {
            if(data.length > 0){
                res.json({ message: "Login Successful" });
            } else {
                res.json({ message: "No Record" });
            }
        }
    });
});

app.post('/signup', (req, res)=> {
    const { name, email, password } = req.body;

    // email already exists
    const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkEmailQuery, [email], (err, result) => {
        if (err) {
            console.error("Error checking email:", err);
            return res.status(500).json({ message: "Signup Failed" });
        }

        if (result.length > 0) {
            return res.json({ message: "Email already exist" });
        }

        // Email doesn't exist, proceed with signup
        const insertQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        const values = [name, email, password];
        db.query(insertQuery, values, (err, data) => {
            if (err) {
                console.error("Error inserting into the database:", err);
                return res.status(500).json({ message: "Signup Failed" });
            }
            return res.json({ message: "Signup Successful" });
        });
    });
});

app.post('/booking', (req, res) => {
    const { firstName, lastName, checkInDate, checkOutDate, adults, children, rooms, roomType, totalPrice, contactNo, email } = req.body;

    const insertQuery = "INSERT INTO booking (firstName, lastName, checkInDate, checkOutDate, adults, children, rooms, roomType, totalPrice, contactNo, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [firstName, lastName, checkInDate, checkOutDate, adults, children, rooms, roomType, totalPrice, contactNo, email];
    db.query(insertQuery, values, (err, data) => {
        if (err) {
            console.error("Error inserting into the database:", err);
            return res.status(500).json({ message: "Booking Failed" });
        }
        return res.json({ message: "Booking Successful" });
    });
});

app.get('/bookings', (req, res) => {
    const selectQuery = "SELECT * FROM booking";
    db.query(selectQuery, (err, data) => {
        if (err) {
            console.error("Error fetching booking data:", err);
            return res.status(500).json({ message: "Error fetching booking data" });
        }
        return res.json(data);
    });
});

app.listen(8081, ()=> {
    console.log("listening");
});
