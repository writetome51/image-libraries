import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ImageRecord } from '@interfaces/image-record.interface';
import { setArray } from '@writetome51/set-array';
import { IDoThis } from '@interfaces/i-do-this.interface';


export class __SetCurrentPageImagesService {

	static async go(
		pageNum: number,
		paginator: {
			setCurrentPageNumber: (num: number, option?: { reload: boolean }) => Promise<void>,
			getCurrentPage: () => ImageRecord[]
		},
		option = {reload: false}

	): Promise<void> {
		try {
			await paginator.setCurrentPageNumber(pageNum, option);

			// Caches reference to paginator's current page, which is emptied on logout.
			setArray(currentPageImages.data, paginator.getCurrentPage());
		}
			// If the current page doesnt exist it triggers error, so we catch it:
		catch (e) {
			console.log(e.message);
		}
	}

}

export const SetCurrentPageImagesService: IDoThis = __SetCurrentPageImagesService;
