import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const joinSlack = functions.https.onRequest((request, response) => {
 response.redirect('https://join.slack.com/t/dooboolab/shared_invite/enQtNTAwODgxNDExNTg2LTkzNTA3ZmJmZDM4YzQ3ZWEyNTI3MjdkZjJmYjNhNjlmY2UzYjMzZTJjMjVkMmIzM2M1Y2QyZjlkN2NkZjhmZWE');
});
