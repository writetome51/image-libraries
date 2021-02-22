import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';


export interface InterpretResult extends IDoThis {

	go: (result: any | HasError) => void;

}
