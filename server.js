let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/',(req, res) => {
    return res.send({error: false, message: 'Welcome to CRUD API with NodeJs'});
});

// connect to mysql
let dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'knacx_test_api'
})
dbCon.connect();

// retrieve all patient
app.get('/patients', (req, res) => {
    dbCon.query('SELECT * FROM covid_patient', (error, results, fields) => {
        if (error) throw error;
        let message = "";
        if(results === undefined || results.length == 0){
            message = "patient table is empty";
        } else {
            message = "Successfully retrieved all patient";
        }
        return res.send({error: false, data: results, message: message});
    });
});

// add new patient
app.post('/patient', (req, res) => {
    let id = req.body.patient_id;
    let name = req.body.patient_name;
    let lastname = req.body.patient_lastname;
    let age = req.body.patient_age;
    let phone = req.body.patient_phone;

    dbCon.query('INSERT INTO covid_patient (patient_id, patient_name, patient_lastname, patient_age, patient_phone) VALUES (?, ?, ?, ?, ?)', 
    [id, name, lastname, age, phone], (error, results, fields) => {
        if (error) throw error;
        return res.send({error: false, data: results, message: "Patient sucessfully added"});    
    });
});

// retriev patient by id
app.get('/patient/:id', (req, res) => {
    let id = req.params.id;

    dbCon.query('SELECT * FROM covid_patient WHERE patient_id = ?', id, (error, results, fields) => {
        if(error) throw error;
        let message = "";
        if(results === undefined || results.length == 0){
            message = "patient not found";
        } else {
            message = "Successfully retrieved patient";
        }
        return res.send({error: false, data: results[0], message: message});
    });
});

// update patient with id
app.put('/patient', (req, res) => {
    let id = req.body.patient_id;
    let name = req.body.patient_name;
    let lastname = req.body.patient_lastname;
    let age = req.body.patient_age;
    let phone = req.body.patient_phone;

    dbCon.query('UPDATE covid_patient SET patient_name = ?, patient_lastname = ?, patient_age = ?, patient_phone = ? WHERE patient_id = ?'
    , [name, lastname, age, phone,id], (error, results, fields) => {
        if(error) throw error;

        let message = "";
        if(results.changedRow === 0){
            message = "Patient not found or data are same";
        } else {
            message = "Patient Successfully updated"
        }
        return res.send({error: false, data: results, message: message})
    });
});

// Delete Patient by id
app.delete('/patient', (req, res) => {
    let id = req.body.patient_id;

    dbCon.query('DELETE FROM covid_patient WHERE patient_id = ?', [id], (error, results, fields) => {
        if(error) throw error;

        let message = "";
        if(results.affectedRows === 0){
            message = "Patient not found";
        } else {
            message = "Patient Delete Successfully";
        }
        return res.send({error: false, data: results, message: message});
    });
});

app.listen(3000, () => {
    console.log('Node App is running on port 3000');
});

module.exports = app;