import { Component, OnInit } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';
import { ListRearrangerService } from './list-rearranger.service';
import { Unsubscribable } from 'rxjs';
import { PageImagesData } from './page-images.data';


@Component({
	selector: 'library-images-list',
	template: `
		<re-arrangeable-grid-list [data]="pageImages.data"
			unsubscribeOnDestroy [subscriptions]="[subscription]"
		>
			<re-arrangeable-grid-list-item *ngFor="let img of pageImages.data; let i = index;"
				[index]="i"
			>
				<thumbnail-image-container [image]="img"></thumbnail-image-container>

			</re-arrangeable-grid-list-item>

		</re-arrangeable-grid-list>
	`
})
export class LibraryImagesListComponent extends HasDataInputDirective<ImageRecord[]>
	implements OnInit {

	subscription: Unsubscribable;
	pageImages: {data: ImageRecord[]} = PageImagesData;


	constructor(
		private __listRearranger: ListRearrangerService,
		private __updateLibraryImagesOrder
	) {
		super();
	}


	ngOnInit() {
		this.pageImages.data = this.data;

		this.subscription = this.__listRearranger.rearrangedList$.subscribe(
			(list: ImageRecord[]) => {
				// May not need this line:
				//	this.pageImages.data = list;

				this.__updateLibraryImagesOrder.go(list);
			}
		);
	}

}
