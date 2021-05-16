import { ImageRecord } from '@interfaces/image-record.interface';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';


export abstract class ImagesListComponent extends HasDataInputComponent<ImageRecord[]> {}
