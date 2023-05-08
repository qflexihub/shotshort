import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {

      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: "AIzaSyDZgct-CSVsi-ObA3Rg91jNF7QMUQENNBE",
        authDomain: "shotshort-website.firebaseapp.com",
        projectId: "shotshort-website",
        storageBucket: "shotshort-website.appspot.com",
        messagingSenderId: "922222016477",
        appId: "1:922222016477:web:bd3b00e8bc60638c536834",
        measurementId: "G-M34JHJ8C10"
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

         // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
        // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey: "BOFCfILnhNWfAM4HjKzpcJlGpTNDTsexuSiL5Z4tGwaHDLLM3yUt7BnAV80Ap2AgHPDaJ5DmjZDtUFc3jekpWWo",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};

export { firebaseCloudMessaging };

// TODO: - Use this curl to send notification
// curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
// --header 'Content-Type: application/json' \
// --header 'Authorization: key=AAAA1ri3N90:APA91bGIHPPtmtdi9Ge_0aeVc4yvK50LBWAiXzMrUnjtPJrpprsr6zEpuxiDwCu0gLDdpgXvwVb_ZHHjrOaSbBnER6MhDEBu0WFmKpL9CJ569TpHBlkZwW0aVWlAsKRiebl9DiSudFsX' \
// --data-raw '{ 
//     "to": "cTDo_Cts95uQQPlOu2otBw:APA91bHvkpVogPx2k1WX6Lbq_oBMYzokzGESZmEUDFXwhaOiVIr495Ca4JG0MefWsBoK2fHvFhj_pNcnfMRBaRqyPHYYAn80SqLjCSAOD6pT_vAfSI6VCk8y9BMqgKeSm5JJH5OxblNq",
//     "priority": "high",
//     "notification": {
//         "title": "50% offer for T shirts",
//         "body" : "Get extra 10% on your first order. Hurry! offer expires in 2 hours"
//     },
//     "data": {
//         "url": "/offers"
//     }
// }'