import { Injectable } from '@angular/core';
import { LibraryImagesListServicesModule } from './library-images-list-services.module';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { Subject, Subscribable } from 'rxjs';


@Injectable({providedIn: LibraryImagesListServicesModule})
export class ListRearrangerService implements Subscribable<any[]> {

	private __list: any[];
	private __subject = new Subject();


	setList(value: any[]) {
		this.__list = value;
	}


	subscribe(callback) {
		return this.__subject.subscribe(callback);
	}


	moveItem(fromIndex, toIndex): void {
		if (fromIndex === toIndex) return;
		moveByIndex(fromIndex, toIndex, this.__list);

		this.__subject.next(this.__list);
	}

}
