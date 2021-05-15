import { AnsweredQuestion } from './answered-question.interface';


export interface AppUser {

	email: string; // unique, indexed

	password: string; // hashed (one-way encryption)

	securityQuestion: AnsweredQuestion; // needed for user to log in if forgot password

}
