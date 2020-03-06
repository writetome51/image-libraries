import { Subject, Subscribable } from 'rxjs';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { HasSubscribable } from '../interfaces/has-subscribable';
import { PaginatorService } from './paginator/paginator.service';
import { Injectable } from '@angular/core';
import { LibraryPaginatorService } from './paginator/library-paginator.service';

@Injectable({providedIn: 'root'})

export class ListItemRemoverService implements HasSubscribable<any> {

	private __subject = new Subject();


	get subscribable(): Subscribable<{ indexBeingRemoved: number, previousLength: number }> {
		return this.__subject;
	}


	constructor(private __paginator: LibraryPaginatorService) {
	}


	remove(index): void {
		let previousLength = this.__paginator.currentPage.length;
		removeByIndex(index, this.__paginator.currentPage);

		this.__subject.next({indexBeingRemoved: index, previousLength});
	}


}
