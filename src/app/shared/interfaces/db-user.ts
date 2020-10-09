import { AppUser } from './app-user';

// Represents a record in a db 'users' collection.

export interface DBUser extends AppUser {
	_id: string; // unique, never changes.  Primary key

	lastLoggedIn: Date;

	loggedIn: boolean;

	sessionID: string; // unique, indexed
}
