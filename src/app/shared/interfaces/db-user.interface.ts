import { AppUser } from './app-user.interface';
import { HasIDKey } from '@interfaces/has-id-key.interface';


// Represents a record in a db 'users' collection.

export interface DBUser extends AppUser, HasIDKey {

	lastLoggedIn: Date;

	loggedIn: boolean;

	sessionID: string; // unique, indexed

}
