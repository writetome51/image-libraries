import { IDoThis } from '@interfaces/i-do-this.interface';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Injectable } from '@angular/core';
import { LoadedImagesStateService } from '@services/loaded-images-state_service/loaded-images-state.service';
import { LibraryPaginatorService } from '@app/shared/services/app-paginator/library-paginator_service/library-paginator.service';
import { AllImagesPaginatorService } from '@app/shared/services/app-paginator/all-images-paginator_service/all-images-paginator.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterModifyingLoadedImagesService implements IDoThis {

	constructor(
		private __loadedImagesState: LoadedImagesStateService,
		private __allImagespaginator: AllImagesPaginatorService,
		private __libraryPaginator: LibraryPaginatorService
	) {}


	async go() {
		const paginator = (this.__loadedImagesState.getOrigin() === 'all' ?
			this.__allImagespaginator : this.__libraryPaginator);

		await this.__refreshCurrentPageData(paginator);
	}


	private async __refreshCurrentPageData(paginator: AppPaginatorService) {
		let pageNum = paginator.getCurrentPageNumber();
		await paginator.setCurrentPageNumber(pageNum, {reload: true});
	}

}
