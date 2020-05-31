import { AppUser } from './app-user';

// Represents a document in a MongoDB 'users' collection.

export interface DBUser extends AppUser {
	_id: string; // unique, never changes.  Primary key

	lastLoggedIn: Date;

	loggedIn: boolean;

	sessionID: string; // unique, indexed
}
