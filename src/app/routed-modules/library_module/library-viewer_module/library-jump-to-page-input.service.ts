import { Injectable } from '@angular/core';
import { JumpToPageInputService }
	from '@validating-input/jump-to-page-input.abstract.service';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { LibraryViewerServicesModule } from './library-viewer-services.module';


@Injectable({providedIn: LibraryViewerServicesModule})
export class LibraryJumpToPageInputService extends JumpToPageInputService {

	constructor(_paginator: LibraryPaginatorService) {
		super(_paginator);
	}

}
