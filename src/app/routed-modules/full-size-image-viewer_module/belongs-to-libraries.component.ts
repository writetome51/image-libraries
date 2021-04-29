import { Component, Input } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from '@services/browser-storage/libraries-in-browser-storage.service';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { ImageRecord } from '@interfaces/image-record.interface';
import { getByTest } from '@writetome51/array-get-by-test';


@Component({
	selector: 'belongs-to-libraries',
	template: `
		<p>Belongs to Libraries:</p>
		<ul>
			<li *ngFor="let library of libraries">
				<a [routerLink]="['/library', library.name, 'page', 1]">
					{{library.name}}
				</a>
			</li>
		</ul>
	`
})
export class BelongsToLibrariesComponent {

	@Input() image: ImageRecord;

	libraries: LibraryRecord[] = [];


	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {

		let libsMap: { [libName: string]: LibraryRecord } = this.__librariesInBrowser.get();

		this.libraries = getByTest(
			(lib: LibraryRecord) => lib._image_ids.includes(this.image._id),
			Object.values(libsMap)
		);

	}

}
