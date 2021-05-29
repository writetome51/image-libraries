import { Component } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { HasDataInputDirective } from '@app/shared/abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'full-size-image',
	template: `<img [src]="data.src" [alt]="data.description"/>`
})
export class FullSizeImageComponent extends HasDataInputDirective<ImageRecord> {}
