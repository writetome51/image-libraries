import { Component } from '@angular/core';
import { ListItemRemoverService } from './list-item-remover.service';
import { HasDataInputDirective }
	from '@app/shared/abstract-directives/has-data-input.abstract.directive';
import { ImageRecord } from '@interfaces/image-record.interface';


@Component({
	selector: 'library-images-list',
	template: `
		<re-arrangeable-grid-list [data]="data">

			<re-arrangeable-grid-list-item *ngFor="let img of data; let i = index;" [index]="i">

				<thumbnail-image-container [image]="img"></thumbnail-image-container>

			</re-arrangeable-grid-list-item>

		</re-arrangeable-grid-list>
	`
})
export class LibraryImagesListComponent extends HasDataInputDirective<ImageRecord[]> {

	constructor(private __listItemRemover: ListItemRemoverService) {
		super();
	}

}
