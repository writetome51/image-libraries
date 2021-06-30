import { Component, OnInit } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';
import { ListRearrangerService } from './list-rearranger.service';
import { Unsubscribable } from 'rxjs';
import { ProcessSaveLibraryImagesOrderService }
	from '@process/process-save-library-images-order_service/process-save-library-images-order.service';
import { CurrentPageImagesData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { setArray } from '@writetome51/set-array';


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
	pageImages = CurrentPageImagesData;


	constructor(
		private __listRearranger: ListRearrangerService,
		private __processSaveLibraryImagesOrder: ProcessSaveLibraryImagesOrderService
	) {
		super();
	}


	ngOnInit() {
		this.pageImages = CurrentPageImagesData;

		this.listOrderSubscription = this.__listRearranger.rearrangedList$.subscribe(
			async (list: ImageRecord[]) => await this.__runTasksAfterGettingRearrangedImages(list)
		);
	}


	private async __runTasksAfterGettingRearrangedImages(images) {
		console.log(images);
		setArray(this.pageImages.data, images);
		await this.__processSaveLibraryImagesOrder.go(images);
	}

}
