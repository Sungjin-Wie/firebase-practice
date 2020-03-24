const functions = require('firebase-functions');
const express = require('express');
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("../authkey.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://file-io-d8da0.firebaseio.com"
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

app.get("/hello", (req, res) => {
    res.send("Hello World");
})

exports.app = functions.https.onRequest(app);