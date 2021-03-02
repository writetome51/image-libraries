import { IDoThis } from '@interfaces/i-do-this.interface';


export interface Process extends IDoThis {

	go: (...args) => void;

}
