import { AppPaginationControlsComponent } from './app-pagination-controls.component';
import { Component } from '@angular/core';
import { ConfigurePaginatorService as configurePaginator }
	from '@app-paginator/configure-paginator.service';
import { HasContextInputDirective }
	from '@abstract-directives/has-context-input.abstract.directive';
import { hasValue } from '@writetome51/has-value-no-value';
import { PageSizeInBrowserStorageService }
	from '@browser-storage/page-size-in-browser-storage.service';
import { Router } from '@angular/router';
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
export class PageSizeMenuComponent
	extends HasContextInputDirective<AppPaginationControlsComponent> {

	// must be multiples or divisibles of the default pageSize
	readonly pageSizes = [10, 20, 40, 60, 80];

	private __chosenSize = 40;


	set chosenSize(value) {
		value = Number(value);
		this.__chosenSize = value;
		this.__runTasksAfterSettingChosenSize(value);
	}

	get chosenSize(): number { return this.__chosenSize; }


	constructor(
		private __pageSizeInBrowser: PageSizeInBrowserStorageService,
		private __router: Router
	) {
		super();
		const storedPageSize = this.__pageSizeInBrowser.get();
		if (hasValue(storedPageSize)) this.__chosenSize = storedPageSize;
	}


	private __runTasksAfterSettingChosenSize(value){
		this.__pageSizeInBrowser.set(value);
		configurePaginator.go(this.context.paginator, value);
		this.__resetToFirstPage();
	}


	private __resetToFirstPage() {
		// If already on page 1, reloadData without changing URL:
		if (this.context.currentPage === 1) reloadCurrentPageData.go(this.context.paginator);

		else this.__router.navigate(['/' + this.context.routeBeforePageNumber, 1]);
	}

}
