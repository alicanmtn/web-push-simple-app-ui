//importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

//importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging.js');

//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
//import { firebase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging.js";

importScripts("./firebaseJs/firebase-app.js");
importScripts("./firebaseJs/firebase-messaging.js");

//const firebaseConfig = {
//    apiKey: "",
//    authDomain: "",
//    projectId: "test-project-for-notific-b60f2",
//    storageBucket: "test-project-for-notific-b60f2.appspot.com",
//    messagingSenderId: "20890794400",
//    appId: "1:20890794400:web:ae5e418027010d02d0ccc5",
//    measurementId: "G-XQZ50EJ8YK"
//};


firebase.initializeApp({
    apiKey: "AIzaSyAm8lQv0jp-zNaDuqpEYvOXnzU-vYyG-n0",
    authDomain: "test-project-for-notific-b60f2.firebaseapp.com",
    projectId: "test-project-for-notific-b60f2",
    storageBucket: "test-project-for-notific-b60f2.appspot.com",
    messagingSenderId: "20890794400",
    appId: "1:20890794400:web:ae5e418027010d02d0ccc5"
});

const messaging = firebase.messaging();

messaging.requestPermission().then(function () {
    console.log('Bildirim izni alındı.');
    return messaging.getToken();
}).then(function (token) {
    console.log('Cihaz tokenı:', token);
    // Tokenı sunucuya gönderme işlemi
}).catch(function (err) {
    console.log('Bildirim iznine erişilemedi:', err);
});

//const app = initializeApp(firebaseConfig);
//const messaging = getMessaging(app);

//messaging.requestPermission().then(function () {
//    console.log('Bildirim izni alındı.');
//    return messaging.getToken();
//}).then(function (token) {
//    console.log('Cihaz tokenı:', token);
//    // Tokenı sunucuya gönderme işlemi
//}).catch(function (err) {
//    console.log('Bildirim iznine erişilemedi:', err);
//});

//Notification.requestPermission().then(permission => {
//    if (permission === 'granted') {
//        console.log('Bildirim izni verildi.');
//        // Token alma ve sunucuya gönderme işlemleri
//    } else {
//        console.log('Bildirim izni verilmedi.');
//    }
//});