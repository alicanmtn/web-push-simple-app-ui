importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
});

const messaging = firebase.messaging();

Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        console.log('Bildirim izni verildi.');
        messaging.requestPermission().then(function () {
            console.log('Bildirim izni alındı.');
            return messaging.getToken();
        }).then(function (token) {
            console.log('Cihaz tokenı:', token);
            // Tokenı sunucuya gönderme işlemi
        }).catch(function (err) {
            console.log('Bildirim iznine erişilemedi:', err);
        });
    } else {
        console.log('Bildirim izni verilmedi.');
    }
});