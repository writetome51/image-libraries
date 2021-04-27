import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
// import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageRecord } from '@interfaces/image-record.interface';


export class GetPageImagesService { // implements IDoThis

	static go(
		paginator: { getCurrentPage: () => ImageRecord[] }
	): ImageRecord[] {
		try {
			// Caches reference to paginator's current page, which is emptied on logout.
			currentPageImages.data = paginator.getCurrentPage();
			return currentPageImages.data;
		}
			// If the current page doesnt exist it triggers error, so we catch it:
		catch (e) {
			console.log(e.message);
		}
	}

}
