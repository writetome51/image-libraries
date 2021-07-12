import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Component, Input } from '@angular/core';
import { ConfigurePaginatorService as configurePaginator }
	from '@app-paginator/configure-paginator.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { PageSizeInBrowserStorageService }
	from '@browser-storage/page-size-in-browser-storage.service';
import { ReloadCurrentPageDataService as reloadCurrentPageData }
	from '@services/reload-current-page-data.service';


@Component({
	selector: 'page-size-menu',
	template: `
		<label for="page-size-menu">Images per page:</label>
		<select name="page-size-menu" id="page-size-menu" [(ngModel)]="chosenSize">
			<option *ngFor="let size of pageSizes"
				[value]="size" [selected]="size === chosenSize"
			>
				{{size}}
			</option>
		</select>
	`
})
export class PageSizeMenuComponent {

	@Input() paginator: AppPaginatorService;

	// must be multiples or divisibles of the default pageSize
	readonly pageSizes = [10, 20, 40, 60, 80];

	private __chosenSize: number;


	set chosenSize(value) {
		value = Number(value);
		this.__chosenSize = value;

		this.__pageSizeInBrowser.set(value);
		configurePaginator.go(this.paginator, value);
		reloadCurrentPageData.go(this.paginator);
	}

	get chosenSize(): number { return this.__chosenSize; }


	constructor(private __pageSizeInBrowser: PageSizeInBrowserStorageService) {
		const storedPageSize = this.__pageSizeInBrowser.get();
		if (hasValue(storedPageSize)) this.__chosenSize = storedPageSize;
	}

}
