import { Injectable } from '@angular/core';
import { URLParamIDData as paramID } from '../../../data-structures/read-only-data/url-param-id.data';
import { AllImagesPaginatorService } from '../../services/app-paginator/all-images-paginator.service';
import { Handler } from '../../../interfaces/handler';


@Injectable({providedIn: 'root'})

export class AllImagesRouteParamsHandlerService implements Handler {

	constructor(private __allImagesPaginator: AllImagesPaginatorService) {
	}


	async handle(params) {

		let page = Number(params[paramID.pageNumber]);
		await this.__allImagesPaginator.set_currentPageNumber(page);
	}

}
