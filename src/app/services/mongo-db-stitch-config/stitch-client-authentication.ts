import { AnonymousCredential } from 'mongodb-stitch-browser-sdk';
import { mongoDBStitch } from './stitch-client-config';

export function loginAnonymous() {
  // Allow users to log in anonymously
  const credential = new AnonymousCredential();
  return mongoDBStitch.auth.loginWithCredential(credential);
}

export function hasLoggedInUser() {
  // Check if there is currently a logged in user
  return mongoDBStitch.auth.isLoggedIn;
}

export function getCurrentUser() {
  // Return the user object of the currently logged in user
  return mongoDBStitch.auth.isLoggedIn ? mongoDBStitch.auth.user : null;
}

export function logoutCurrentUser() {
  // Logout the currently logged in user
  const user = getCurrentUser();
  return mongoDBStitch.auth.logoutUserWithId(user.id);
}
