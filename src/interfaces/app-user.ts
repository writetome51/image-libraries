export interface AppUser {
	email: string; // unique, indexed.
	password: string; // hashed
	securityQuestion: {
		question: string,
		answer: string // hashed
	};
}
