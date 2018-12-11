"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.joinSlack = functions.https.onRequest((request, response) => {
    response.redirect('https://join.slack.com/t/dooboolab/shared_invite/enQtNTAwODgxNDExNTg2LTMzYTNlZmE2M2FlNGNlYWU1NzcwZTY0NTI1NWMyYmU5NWViNzQxNjhiYzE0MjdjNzg1MjhlM2VhM2U4YWRhZjM');
});
//# sourceMappingURL=index.js.map