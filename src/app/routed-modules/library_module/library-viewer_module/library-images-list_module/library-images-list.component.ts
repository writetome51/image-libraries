import { Component, OnInit } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';
import { ListRearrangerService } from './re-arrangeable-grid-list_module/list-rearranger.service';
import { Unsubscribable } from 'rxjs';


@Component({
	selector: 'library-images-list',
	template: `
		<re-arrangeable-grid-list [data]="imagesCopy"
			unsubscribeOnDestroy [subscriptions]="[subscription]"
		>
			<re-arrangeable-grid-list-item
				*ngFor="let img of imagesCopy; let i = index;" [index]="i"
			>
				<thumbnail-image-container [image]="img"></thumbnail-image-container>

			</re-arrangeable-grid-list-item>

		</re-arrangeable-grid-list>
	`
})
export class LibraryImagesListComponent extends HasDataInputDirective<ImageRecord[]>
	implements OnInit {

	imagesCopy = [];
	subscription: Unsubscribable;


	constructor(private __listRearranger: ListRearrangerService) {
		super();
	}


	ngOnInit() {
		this.imagesCopy = this.data;

		this.subscription = this.__listRearranger.rearrangedList$.subscribe(
			(list: ImageRecord[]) => this.imagesCopy = list
		);
	}

}
