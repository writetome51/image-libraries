import { Injectable } from '@angular/core';
import { JumpToPageInputService }
	from '@app-pagination-controls/jump-to-page-input.service';
import { LibraryPaginatorService } from '../../library-paginator_service/library-paginator.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryJumpToPageInputService extends JumpToPageInputService {

	constructor(_paginator: LibraryPaginatorService) {
		super(_paginator);
	}

}
