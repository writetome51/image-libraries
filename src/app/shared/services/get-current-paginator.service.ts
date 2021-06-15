import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LoadedImagesStateService } from '@services/loaded-images-state_service/loaded-images-state.service';
import { LibraryPaginatorService } from '@app-paginator/library-paginator_service/library-paginator.service';
import { AllImagesPaginatorService } from '@app-paginator/all-images-paginator_service/all-images-paginator.service';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';


@Injectable({providedIn: 'root'})
export class GetCurrentPaginatorService implements IDoThis {

	constructor(
		private __loadedImagesState: LoadedImagesStateService,
		private __allImagespaginator: AllImagesPaginatorService,
		private __libraryPaginator: LibraryPaginatorService
	) {}


	go(): AppPaginatorService {
		return (
			this.__loadedImagesState.getOrigin() === 'library' ?
				this.__libraryPaginator : this.__allImagespaginator
		);
	}

}
