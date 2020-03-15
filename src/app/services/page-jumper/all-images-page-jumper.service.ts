import { Injectable } from '@angular/core';
import { PageJumperService } from './page-jumper.service';
import { AllImagesPaginatorService } from '../paginator/all-images-paginator.service';


@Injectable({providedIn: 'root'})

export class AllImagesPageJumperService extends PageJumperService {

	constructor(__paginator: AllImagesPaginatorService) {
		super(__paginator);
	}

}
