import { Component, Input } from '@angular/core';
import { DBImage } from '@interfaces/app-image/db-image.interface';


@Component({
	selector: 'full-size-image',
	template: `<img [src]="data.src" [alt]="data.description"/>`
})
export class FullSizeImageComponent {

	@Input() data: DBImage;

}
