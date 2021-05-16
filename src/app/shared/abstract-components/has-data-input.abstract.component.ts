import { ImageRecord } from '@interfaces/image-record.interface';
import { Component, Input } from '@angular/core';


@Component({selector: '', template: ''}) // prevents Angular build error
export abstract class ImagesListComponent {

	@Input() data: ImageRecord[];

}
