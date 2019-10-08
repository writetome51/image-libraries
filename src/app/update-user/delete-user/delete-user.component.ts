import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'delete-user',
	templateUrl: './delete-user.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserComponent implements OnInit {

	heading = 'Self Destruct?';

	constructor() {
	}


	ngOnInit() {
	}

}
