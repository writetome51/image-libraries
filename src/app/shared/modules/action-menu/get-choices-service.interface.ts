import { MenuChoice } from './menu-choice.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';


export interface GetChoicesService extends IDoThis {

	go: (...args) => MenuChoice[];

}
