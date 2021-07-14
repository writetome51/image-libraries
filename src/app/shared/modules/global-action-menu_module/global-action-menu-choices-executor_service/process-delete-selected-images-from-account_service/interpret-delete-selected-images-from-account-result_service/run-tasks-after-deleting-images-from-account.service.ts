import { AlertsService as alerts } from '@services/alerts.service';
import { GlobalActionMenuServicesModule } from '../../../global-action-menu-services.module';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageSelectorService } from '@services/image-selector.service';
import { Injectable } from '@angular/core';
import { ReloadCurrentPageDataWithCurrentPaginatorService }
	from '@services/reload-current-page-data-with-current-paginator_service/reload-current-page-data-with-current-paginator.service';
import { UserImageTotalInBrowserStorageService } from '@browser-storage/user-image-total-in-browser-storage.service';
import { LibrariesInBrowserStorageService } from '@browser-storage/libraries-in-browser-storage.service';
import { AssureUserDataLoadedService } from '@app/app-header_module/logged-in-navigator_module/assure-user-data-loaded_service/assure-user-data-loaded.service';
import { LoadedLibraryInBrowserStorageService } from '@browser-storage/loaded-library-in-browser-storage.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class RunTasksAfterDeletingImagesFromAccountService implements IDoThis {

	constructor(
		private __reloadCurrentPageData: ReloadCurrentPageDataWithCurrentPaginatorService,
		private __imageSelector: ImageSelectorService,
		private __userImageTotalInBrowser: UserImageTotalInBrowserStorageService,
		private __librariesInBrowser: LibrariesInBrowserStorageService,
		private __assureUserDataLoaded: AssureUserDataLoadedService,
		private __loadedLibraryInBrowser: LoadedLibraryInBrowserStorageService
	) {}


	async go() {
		alerts.setSuccess('Image(s) deleted');
		this.__imageSelector.unselectAll();

		this.__librariesInBrowser.remove();
		this.__loadedLibraryInBrowser.remove();
		await this.__assureUserDataLoaded.go();

		await this.__reloadCurrentPageData.go();
	}

}
