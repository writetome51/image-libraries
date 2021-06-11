import { RunTasksAfterModifyingLoadedImagesService }
	from '@run-post-success-tasks/run-tasks-after-modifying-loaded-images.service';
import { AllImagesPaginatorService } from '@app/routed-modules/all-images_module/all-images-paginator_service/all-images-paginator.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterModifyingAllImagesService
	extends RunTasksAfterModifyingLoadedImagesService {

	constructor(__paginator: AllImagesPaginatorService) {
		super(__paginator);
	}

}
