import { Component } from '@angular/core';
import { AllImagesData } from '../../runtime-state-data/all-images.data';
import { DBImage } from '../../interfaces/db-image';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent {

	get images(): DBImage[] {
		return AllImagesData.data;
	}

}
