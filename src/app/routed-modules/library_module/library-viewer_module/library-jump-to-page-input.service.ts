import { Injectable } from '@angular/core';
import { ValidatingJumpToPageNumberInputService }
	from '@validating-input/validating-jump-to-page-number-input.abstract.service';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { LibraryViewerServicesModule } from './library-viewer-services.module';


@Injectable({providedIn: LibraryViewerServicesModule})
export class LibraryJumpToPageInputService extends ValidatingJumpToPageNumberInputService {

	constructor(_paginator: LibraryPaginatorService) {
		super(_paginator);
	}

}
