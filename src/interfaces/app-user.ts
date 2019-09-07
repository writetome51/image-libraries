export interface AppUser {
	email: string;
	password: string;
	securityQuestion: { question: string, answer: string };
}


export interface DBUser extends AppUser {
	_id: string;
	lastLoggedIn: Date;
	loggedIn: boolean;
	sessionID: string;
}
