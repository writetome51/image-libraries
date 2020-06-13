import { Subject, Subscribable } from 'rxjs';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { Injectable } from '@angular/core';
import { LibraryPaginatorService } from './app-paginator/library-paginator.service';
import { ItemBeingRemoved } from '../../interfaces/item-being-removed';

@Injectable({providedIn: 'root'})

export class ListItemRemoverService {

	private __subject = new Subject();


	get itemBeingRemoved(): Subscribable<ItemBeingRemoved> {
		return this.__subject;
	}


	constructor(private __libraryPaginator: LibraryPaginatorService) {
	}


	remove(index): void {
		let previousLength = this.__libraryPaginator.currentPage.length;
		removeByIndex(index, this.__libraryPaginator.currentPage);

		this.__subject.next({indexBeingRemoved: index, previousLength});
	}


}
