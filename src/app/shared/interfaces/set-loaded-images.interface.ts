import { IDoThis } from '@interfaces/i-do-this.interface';
import { LoadConfiguration } from '@interfaces/load-configuration.interface';


export interface SetLoadedImages extends IDoThis {

	go: (load: LoadConfiguration) => void;

}
