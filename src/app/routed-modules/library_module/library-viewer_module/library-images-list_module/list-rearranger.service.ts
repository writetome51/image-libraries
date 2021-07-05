import { Injectable } from '@angular/core';
import { IndexBeingMovedData as indexBeingMoved } from './index-being-moved.data';
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


	moveItemTo(newIndex): void {
		if (indexBeingMoved.data === newIndex) return;
		moveByIndex(indexBeingMoved.data, newIndex, this.__list);

		this.__subject.next(this.__list);
		indexBeingMoved.data = -1;
	}

}
