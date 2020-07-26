import { Component, Input } from '@angular/core';
import { DBImage } from '../../shared/interfaces/db-image';


@Component({
	selector: 'full-size-image',
	templateUrl: './full-size-image.component.html'
})
export class FullSizeImageComponent {

	@Input() data: DBImage;


	constructor() {
	}

}
