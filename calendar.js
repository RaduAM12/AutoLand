import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import { getFirestore, addDoc, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";

const urlParams = new URLSearchParams(window.location.search);
const carName = urlParams.get('masina');

// Afișează un mesaj pe pagină cu numele mașinii, dacă este disponibil
if (carName) {
    document.getElementById('message').innerText = `Ai ales un Test Drive cu mașina ${carName} !`;
} else {
    document.getElementById('message').innerText = "Nu ați selectat o mașină pentru Test Drive.";
}


      // Initializează Flatpickr
flatpickr("#calendar", {
    dateFormat: "Y-m-d", // Formatul datei (an-lună-zi)
    minDate: "today", // Data minimă este data de azi
    enableTime: false // Dezactivează selectarea orei
});



// Configurația Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0dOfv1VdQmTpr8Ho211UTjLf3cisPyHE",
    authDomain: "autoland-firebase.firebaseapp.com",
    projectId: "autoland-firebase",
    storageBucket: "autoland-firebase.appspot.com",
    messagingSenderId: "315006703523",
    appId: "1:315006703523:web:9b99e3b8ba2557b9ad6c16",
    measurementId: "G-1WGM7QMJYM"
  };
  
  // Inițializează Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  

    butonSubmit.addEventListener('click', (e) =>{
        var nume = document.getElementById("nume").value;
        var telefon = document.getElementById("telefon").value;
        var calendarInput = document.getElementById("calendar");
        var data = calendarInput.value; // Obține data din input-ul calendarului

        addDoc(collection(db,"rezervari"), {
            Nume: nume,
            Telefon: telefon,
            Data: data,
        });
        alert("Rezervare efectuata cu succes!");
    });
        

    









