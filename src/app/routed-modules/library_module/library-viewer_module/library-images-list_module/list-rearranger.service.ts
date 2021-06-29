import { Injectable } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { getArrayCopy } from '@writetome51/get-array-copy';
import { Subject, Subscribable } from 'rxjs';
import { IndexBeingMovedData as indexBeingMoved }
	from './re-arrangeable-grid-list_module/index-being-moved.data';
import { LibraryImagesListServicesModule } from './library-images-list-services.module';


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
		this.__list = getArrayCopy(this.__list);
		moveByIndex(indexBeingMoved.data, newIndex, this.__list);

		this.__subject.next(this.__list);
		indexBeingMoved.data = -1;
	}

}
