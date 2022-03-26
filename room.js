var firebaseConfig = {
      apiKey: "AIzaSyC9DOiH9JTg8eTVmBlQnCGaFxPOk-Uvhkg",
      authDomain: "kwitter-4ed5e.firebaseapp.com",
      databaseURL: "https://kwitter-4ed5e-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ed5e",
      storageBucket: "kwitter-4ed5e.appspot.com",
      messagingSenderId: "71727854809",
      appId: "1:71727854809:web:f0a9799af1217edf8e7ac8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
