// import {ResettableToDefault} from '@interfaces/resettable-to-default';
import { DBImage } from '@interfaces/db-image.interface';
import { setArray } from '@writetome51/set-array';


export class PageImagesData { // implements ResettableToDefault

	static data: DBImage[] = [];


	static setDefault() {
		setArray(this.data, []);
	}

}
