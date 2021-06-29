import { Component, OnInit } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';
import { ListRearrangerService } from './list-rearranger.service';
import { Unsubscribable } from 'rxjs';
import { PageImagesData } from './page-images.data';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { ProcessChangeLibraryImagesOrderService }
	from '@process/process-change-library-images-order_service/process-change-library-images-order.service';


@Component({
	selector: 'library-images-list',
	template: `
		<re-arrangeable-grid-list [data]="pageImages.data"
			unsubscribeOnDestroy [subscriptions]="[listOrderSubscription]"
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

	listOrderSubscription: Unsubscribable;
	pageImages: {data: ImageRecord[]} = PageImagesData;


	constructor(
		private __listRearranger: ListRearrangerService,
		private __processChangeLibraryImagesOrder: ProcessChangeLibraryImagesOrderService
	) {
		super();
	}


	ngOnInit() {
		this.pageImages.data = this.data;

		this.listOrderSubscription = this.__listRearranger.rearrangedList$.subscribe(
			async (list: ImageRecord[]) => {
				this.pageImages.data = list;
				await this.__processChangeLibraryImagesOrder.go(list);
			}
		);
	}

}
