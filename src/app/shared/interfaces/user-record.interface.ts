import { AppUser } from './app-user.interface';
import { HasIDKey } from '@interfaces/has-id-key.interface';


export interface UserRecord extends AppUser, HasIDKey {

	lastLoggedIn: Date;

	loggedIn: boolean;

	sessionID: string; // unique, indexed

}
