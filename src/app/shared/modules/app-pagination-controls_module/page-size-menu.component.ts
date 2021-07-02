import { Component, Input } from '@angular/core';
import { PaginationControlsPaginator } from './pagination-controls-paginator.interface';


@Component({
	selector: 'page-size-menu',
	template: `
		<form>
			<label for="page-size-menu">Images per page:</label>
			<select name="page-size-menu" id="page-size-menu">
				<option *ngFor="let size of pageSizes"
					[value]="size" [(ngModel)]="chosenSize" [selected]="size === chosenSize"
				>
					{{size}}
				</option>
  			</select>
		</form>
	`
})
export class PageSizeMenuComponent {

	@Input() paginator: PaginationControlsPaginator;

	defaultPageSize = 20;
	pageSizes = [10, 20, 30, 40];
	private __chosenSize = this.defaultPageSize;


	set chosenSize(value) {
		this.__chosenSize = value;
		this.paginator.setItemsPerPage(value);
		this.paginator.setItemsPerLoad(value > this.defaultPageSize ? value : value * 2);
	}

	get chosenSize(): number { return this.__chosenSize; }

}
