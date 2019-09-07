import { AppUser } from './app-user';


export interface DBUser extends AppUser {
	_id: string;
	lastLoggedIn: Date;
	loggedIn: boolean;
	sessionID: string;
}
