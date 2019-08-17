import { Component, Input } from '@angular/core';
import { LibraryImage } from '../../../../types/library-image';


@Component({
	selector: 'app-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.sass']
})
export class ImageComponent {


	@Input() image: LibraryImage;
	@Input() index: number;


	constructor() {
	}


}
