import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ImageRecord } from '@interfaces/image-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { setArray } from '@writetome51/set-array';


export class __GetPageImagesService {

	static go(
		paginator: { getCurrentPage: () => ImageRecord[] }
	): ImageRecord[] {
		try {
			// Caches reference to paginator's current page, which is emptied on logout.
			setArray(currentPageImages.data, paginator.getCurrentPage());
			return currentPageImages.data;
		}
			// If the current page doesnt exist it triggers error, so we catch it:
		catch (e) {
			console.log(e.message);
		}
	}

}

export const GetPageImagesService: IDoThis = __GetPageImagesService;
