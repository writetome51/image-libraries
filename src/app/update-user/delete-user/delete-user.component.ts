import { Component } from '@angular/core';


@Component({
	selector: 'delete-user',
	templateUrl: './delete-user.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserComponent {

	heading = 'Self Destruct?';
	tonto = {
		src: '../../../assets/tonto.jpg',
		width: 435,
		height: 615
	};


	constructor() {
	}


}
