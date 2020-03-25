const functions = require("firebase-functions");

var admin = require("firebase-admin");

var serviceAccount = require("../authkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://file-io-d8da0.firebaseio.com"
});

exports.Storage = functions.firestore.document("Storage_value")
.onUpdate((change, context) => {
    const { Storage } = require("@google-cloud/storage");
    const storage = new Storage();
    const bucket = storage.bucket("file-io-d8da0.appspot.com")
    
    const options = {
        destination: "public/hello_world.jpeg"
    };
    
    bucket.upload("hello_world.jpeg", options);

    return 0;
})

