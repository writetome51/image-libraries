import { IDoThis } from '@interfaces/i-do-this.interface';
import { getByTest } from '@writetome51/array-get-by-test';
import { ImageRecord } from '@interfaces/image-record.interface';
import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';


export class __GetSelectedImagesService {

	static go(): ImageRecord[] {
		return getByTest(
			(image: ImageRecord) => image['selected'],
			currentPageImages.data
		);
	}

}
export const GetSelectedImagesService: IDoThis = __GetSelectedImagesService;
