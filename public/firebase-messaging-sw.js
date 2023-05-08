importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDZgct-CSVsi-ObA3Rg91jNF7QMUQENNBE",
  authDomain: "shotshort-website.firebaseapp.com",
  projectId: "shotshort-website",
  storageBucket: "shotshort-website.appspot.com",
  messagingSenderId: "922222016477",
  appId: "1:922222016477:web:bd3b00e8bc60638c536834",
  measurementId: "G-M34JHJ8C10"
});

const messaging = firebase.messaging();