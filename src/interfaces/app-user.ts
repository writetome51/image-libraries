export interface AppUser {
	email: string;
	password: string;
	securityQuestion: { question: string, answer: string };
}
