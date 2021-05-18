import { ImageRecord } from '@interfaces/image-record.interface';
import { setArray } from '@writetome51/set-array';
import {ResettableToDefault} from '@interfaces/resettable-to-default.interface';


export class __LoadedImagesData {

	static data: ImageRecord[] = [];


	static setDefault() {
		setArray(this.data, []);
	}
}

export const LoadedImagesData: ResettableToDefault = __LoadedImagesData;
