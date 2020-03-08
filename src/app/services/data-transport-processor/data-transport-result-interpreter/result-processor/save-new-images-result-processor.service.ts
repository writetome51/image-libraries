import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { AlertService as alert } from '../../../alert.service';
import { GetAllImagesProcessorService }
	from '../../image-fetching-processor/get-all-images-processor.service';
import { NewImagesData as newImages }
	from '../../../../data-structures/runtime-state-data/static-classes/new-images.data';
import { Router } from '@angular/router';
import { LibrariesModuleRouteService as moduleRoute }
	from '../../../../libraries/libraries-module-route.service';
import { AppModuleRouteService } from '../../../../app-module-route.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultProcessorService implements DirectProcessor {

	constructor(
		private __getAllImagesProcessor: GetAllImagesProcessorService,
		private __router: Router
	) {
	}


	async process(result) {
		await this.__getAllImagesProcessor.process(); // refreshes LoadedImagesData.data
		newImages.data = [];

		await this.__router.navigate([this.__getRouteTo_AllImagesComponent()]);
		alert.success = 'New images saved';
	}


	private __getRouteTo_AllImagesComponent() {
		return AppModuleRouteService.LibrariesModule + '/' + moduleRoute.AllImagesComponent;
	}

}
