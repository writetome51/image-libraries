import { SecurityQuestion } from '../security-question.interface';


export interface AppUser {

	email: string; // unique, indexed

	password: string; // hashed (one-way encryption)

	securityQuestion: SecurityQuestion;  // needed for user to log in if forgot password

}