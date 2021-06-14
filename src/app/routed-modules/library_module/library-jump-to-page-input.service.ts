import { Injectable } from '@angular/core';
import { JumpToPageInputService }
	from '@app-pagination-controls_module/jump-to-page-input.abstract.service';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { LibraryServicesModule } from './library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryJumpToPageInputService extends JumpToPageInputService {

	constructor(_paginator: LibraryPaginatorService) {
		super(_paginator);
	}

}
