import { Component } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';


@Component({
	selector: 'full-size-image',
	template: `<img [src]="data.src" [alt]="data.description"/>`
})
export class FullSizeImageComponent extends HasDataInputComponent<ImageRecord> {}
