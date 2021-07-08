import { Injectable } from '@angular/core';
import { LibraryImagesListServicesModule } from './library-images-list-services.module';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { Subject, Subscribable } from 'rxjs';


@Injectable({providedIn: LibraryImagesListServicesModule})
export class ListRearrangerService {

	private __list: any[];
	private __subject = new Subject();


	setList(value: any[]) {
		this.__list = value;
	}


	get rearrangedList$(): Subscribable<any[]> {
		return this.__subject;
	}


	moveItem(fromIndex, toIndex): void {
		if (fromIndex === toIndex) return;
		moveByIndex(fromIndex, toIndex, this.__list);

		this.__subject.next(this.__list);
	}

}
