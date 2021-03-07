import { DBImage } from '@interfaces/db-image.interface';
import { setArray } from '@writetome51/set-array';
// import {ResettableToDefault} from '@interfaces/resettable-to-default';


export class LoadedImagesData { // implements ResettableToDefault

	static data: DBImage[] = [];


	static setDefault() {
		setArray(this.data, []);
	}
}
