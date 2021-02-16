import { AllImagesPaginatorService } from './all-images-paginator_service/all-images-paginator.service';
import { Injectable } from '@angular/core';
import { JumpToPageInputService } from '@app-pagination-controls/jump-to-page-input.service';
import { AllImagesServicesModule } from '@app/routed-modules/all-images/all-images-services.module';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesJumpToPageInputService extends JumpToPageInputService {

	constructor(_paginator: AllImagesPaginatorService) {
		super(_paginator);
	}

}
