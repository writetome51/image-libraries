import { IDoThis } from '@interfaces/i-do-this.interface';


export abstract class SearchService implements IDoThis {

	abstract go(): Promise<any[] | { error: { message: string } }>

}
