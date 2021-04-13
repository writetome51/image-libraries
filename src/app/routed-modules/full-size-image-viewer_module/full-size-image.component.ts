import { Component, Input } from '@angular/core';
import { ImageDBRecord } from '@interfaces/image-db-record.interface';


@Component({
	selector: 'full-size-image',
	template: `<img [src]="data.src" [alt]="data.description"/>`
})
export class FullSizeImageComponent {

	@Input() data: ImageDBRecord;

}
