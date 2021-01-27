// import { IDoThis } from '@interfaces/i-do-this.interface';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { PageImagesData as pageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';


export class GetPageDataService { // implements IDoThis

	static go(
		paginator: { getCurrentPage: () => DBImage[] }
	): DBImage[] {
		try {
			// Caches reference to paginator's current page, which is emptied on logout.
			pageImages.data = paginator.getCurrentPage();
			return pageImages.data;
		}
			// If the current page doesnt exist it triggers error, so we catch it:
		catch (e) {
			return undefined;
		}
	}

}
