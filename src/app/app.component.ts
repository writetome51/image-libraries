import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from './services/data-storage.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	title = 'Image Library';
	images: any[];
	subscription;


	constructor(private __dataStorage: DataStorageService) {
	}


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		console.log(event);
	}


	async ngOnInit() {
		this.subscription = await this.__dataStorage.getLibrary(
			{email: 'writetome51@gmail.com', password: 'Gayrainbow69!', libraryName: 'randomPics01'}
		).subscribe((data) => {
			this.images = JSON.parse(data);
			this.subscription.unsubscribe();
		});
	}


}
