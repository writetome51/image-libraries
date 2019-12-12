import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getTail } from '@writetome51/array-get-head-tail';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent {


	get name() {
		let url = this.__router.routerState.snapshot.url;
		return getTail(1, url.split('/'));
	}


	constructor(private __router: Router) {
	}


}
