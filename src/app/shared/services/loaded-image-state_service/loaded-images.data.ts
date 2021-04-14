import { ImageRecord } from '@interfaces/image-record.interface';
import { setArray } from '@writetome51/set-array';
// import {ResettableToDefault} from '@interfaces/resettable-to-default';


export class LoadedImagesData { // implements ResettableToDefault

	static data: ImageRecord[] = [];


	static setDefault() {
		setArray(this.data, []);
	}
}
