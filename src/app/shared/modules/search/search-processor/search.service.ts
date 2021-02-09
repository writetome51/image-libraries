import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';


export abstract class SearchService implements IDoThis {

	abstract go(): Promise<any[] | HasError>

}
