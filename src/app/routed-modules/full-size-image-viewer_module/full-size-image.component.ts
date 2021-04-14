import { Component, Input } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';


@Component({
	selector: 'full-size-image',
	template: `<img [src]="data.src" [alt]="data.description"/>`
})
export class FullSizeImageComponent {

	@Input() data: ImageRecord;

}
