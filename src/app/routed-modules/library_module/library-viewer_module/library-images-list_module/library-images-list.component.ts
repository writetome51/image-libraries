import { Component, OnInit } from '@angular/core';
import { CurrentPageImagesData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { ImageRecord } from '@interfaces/image-record.interface';
import { ListRearrangerService } from './list-rearranger.service';
import { ProcessSaveLibraryImagesOrderService }
	from './process-save-library-images-order_service/process-save-library-images-order.service';
import { setArray } from '@writetome51/set-array';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';


@Component({
	selector: 'library-images-list',
	template: `
		<ul>
			<re-arrangeable-grid-list-item *ngFor="let img of pageImages.data; let i = index;"
				[index]="i"
			>
				<thumbnail-image-container [image]="img"></thumbnail-image-container>
			</re-arrangeable-grid-list-item>
		</ul>
	`
})
export class LibraryImagesListComponent extends UnsubscribeOnDestroyDirective implements OnInit {

	pageImages = CurrentPageImagesData;


	constructor(
		private __listRearranger: ListRearrangerService,
		private __processSaveLibraryImagesOrder: ProcessSaveLibraryImagesOrderService
	) {
		super();
	}


	ngOnInit() {
		this.__listRearranger.setList(this.pageImages.data);

		this._subscriptions = [
			this.__listRearranger.rearrangedList$.subscribe(async (list: ImageRecord[]) =>
				await this.__runTasksAfterGettingRearrangedImages(list)
			)
		];
	}


	private async __runTasksAfterGettingRearrangedImages(images) {
		setArray(this.pageImages.data, images);
		await this.__processSaveLibraryImagesOrder.go(images);
	}

}
