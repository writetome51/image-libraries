import { Component, Input } from '@angular/core';
import { AppImage } from '../../../../interfaces/app-image';


@Component({
	selector: 'full-size-image',
	templateUrl: './full-size-image.component.html'
})
export class FullSizeImageComponent {


	@Input() image: AppImage;


	constructor() {
	}


}
