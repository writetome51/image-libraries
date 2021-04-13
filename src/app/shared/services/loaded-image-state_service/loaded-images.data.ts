import { ImageDBRecord } from '@interfaces/image-db-record.interface';
import { setArray } from '@writetome51/set-array';
// import {ResettableToDefault} from '@interfaces/resettable-to-default';


export class LoadedImagesData { // implements ResettableToDefault

	static data: ImageDBRecord[] = [];


	static setDefault() {
		setArray(this.data, []);
	}
}
