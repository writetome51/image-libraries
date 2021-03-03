import { Injectable } from '@angular/core';
import { JumpToPageInputService }
	from '@app-pagination-controls_module/jump-to-page-input.abstract.service';
import { LibraryPaginatorService }
	from '../../library-paginator_service/library-paginator.service';
import { LibraryViewerServicesModule } from '../library-viewer-services.module';


@Injectable({providedIn: LibraryViewerServicesModule})
export class LibraryJumpToPageInputService extends JumpToPageInputService {

	constructor(_paginator: LibraryPaginatorService) {
		super(_paginator);
	}

}
