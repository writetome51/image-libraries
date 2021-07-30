import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'image-location',
	template: `
		<label for="image-location" hidden>Image Location</label>
<input type="text" id="image-location"/>
	`
})
export class ImageLocationComponent implements OnInit {

	constructor() {}


	ngOnInit() {}

}
