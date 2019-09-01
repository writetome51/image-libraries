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
		this.subscription = this.__dataStorage.getLibrary()
			.subscribe((data) => {
				this.images = JSON.parse(data);
				this.subscription.unsubscribe();
			});
	}


}
