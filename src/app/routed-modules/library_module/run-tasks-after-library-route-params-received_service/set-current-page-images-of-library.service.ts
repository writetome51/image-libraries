import { Injectable } from '@angular/core';
import { SetCurrentPageImagesService } from '@services/set-current-page-images.service';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { LibraryServicesModule } from '../library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class SetCurrentPageImagesOfLibraryService {

	constructor(
		private __libraryPaginator: LibraryPaginatorService,
		private __setCurrentPageImages: SetCurrentPageImagesService
	) {}


	async go(
		pageNum: number,
		option = {reload: false}
	): Promise<void> {

		await this.__setCurrentPageImages.go(pageNum, this.__libraryPaginator, option);
	}

}
