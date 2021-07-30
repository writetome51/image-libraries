import { Component } from '@angular/core';


@Component({
	selector: 'image-name',
	template: `
		<label for="image-name" hidden>Image Name</label>
		<input type="text" id="image-name"/>
	`
})
export class ImageNameComponent {}
