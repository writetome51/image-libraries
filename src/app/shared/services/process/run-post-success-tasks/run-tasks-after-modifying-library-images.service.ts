import { Injectable } from '@angular/core';
import { LibraryPaginatorService }
	from '@app/routed-modules/library_module/library-paginator_service/library-paginator.service';
import { RunTasksAfterModifyingLoadedImagesService }
	from '@run-post-success-tasks/run-tasks-after-modifying-loaded-images.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterModifyingLibraryImagesService
	extends RunTasksAfterModifyingLoadedImagesService {

	constructor(__paginator: LibraryPaginatorService) {
		super(__paginator);
	}

}
