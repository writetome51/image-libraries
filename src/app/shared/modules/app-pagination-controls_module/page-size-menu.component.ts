import { Component, Input } from '@angular/core';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { SetCurrentPageImagesService as setCurrentPageImages }
	from '@services/set-current-page-images.service';


@Component({
	selector: 'page-size-menu',
	template: `
		<form>
			<label for="page-size-menu">Images per page:</label>
			<select name="page-size-menu" id="page-size-menu" [(ngModel)]="chosenSize">
				<option *ngFor="let size of pageSizes"
						[value]="size" [selected]="size === chosenSize"
				>
					{{size}}
				</option>
  			</select>
		</form>
	`
})
export class PageSizeMenuComponent {

	@Input() paginator: AppPaginatorService;

	defaultPageSize = 20;

	// must be multiples or divisibles of defaultPageSize
	pageSizes = [10, 20, 40, 60];
	private __chosenSize = this.defaultPageSize;


	set chosenSize(value) {
		value = Number(value);
		this.__chosenSize = value;

		this.__configurePaginator(this.paginator, value);

		setCurrentPageImages.go(
			this.paginator.getCurrentPageNumber(), this.paginator, {reload: true}
		);
	}


	get chosenSize(): number { return this.__chosenSize; }


	private __configurePaginator(paginator, value) {
		// Because itemsPerPage can't be greater than itemsPerLoad, if new value is greater than
		// itemsPerLoad, the itemsPerLoad must be assigned the new value first.

		if (value > paginator.getItemsPerLoad()) paginator.setItemsPerLoad(value);
		paginator.setItemsPerPage(value);

		paginator.setItemsPerLoad(value > this.defaultPageSize ? value : value * 2);
	}

}
