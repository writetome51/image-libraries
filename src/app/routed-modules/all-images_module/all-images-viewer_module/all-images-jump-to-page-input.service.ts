import { AllImagesPaginatorService }
	from '@app-paginator/all-images-paginator_service/all-images-paginator.service';
import { AllImagesServicesModule } from '../all-images-services.module';
import { Injectable } from '@angular/core';
import { ValidatingJumpToPageNumberInputService } from '@validating-input/validating-jump-to-page-number-input.abstract.service';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesJumpToPageInputService extends ValidatingJumpToPageNumberInputService {

	constructor(_paginator: AllImagesPaginatorService) {
		super(_paginator);
	}

}
