const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com'
});

const message = {
    notification: {
        title: 'Firebase WebPush Title',
        body: 'Firebase webpush başarılı test gönderimi!'
    },
    token: registrationToken
};

admin.messaging().send(message)
    .then((response) => {
        console.log('Bildirim başarıyla gönderildi:', response);
    })
    .catch((error) => {
        console.log('Bildirim gönderimi sırasında hata oluştu:', error);
    });
