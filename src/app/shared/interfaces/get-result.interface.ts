import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';


export interface GetResult extends IDoThis {

	go(...args): any | HasError;

}
