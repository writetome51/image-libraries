// import { IDoThis } from '@interfaces/i-do-this.interface';
import { DBImage } from '@interfaces/db-image.interface';
import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';


export class GetPageImagesService { // implements IDoThis

	static go(
		paginator: { getCurrentPage: () => DBImage[] }
	): DBImage[] {
		try {
			// Caches reference to paginator's current page, which is emptied on logout.
			currentPageImages.data = paginator.getCurrentPage();
			return currentPageImages.data;
		}
			// If the current page doesnt exist it triggers error, so we catch it:
		catch (e) {
			console.log(e.message);
			return undefined;
		}
	}

}
