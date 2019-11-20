export interface AppUser {
	email: string; // unique, indexed.
	password: string; // hashed (one-way encryption)
	securityQuestion: { // needed for user to change their password.
		question: string,
		answer: string // hashed
	};
}
