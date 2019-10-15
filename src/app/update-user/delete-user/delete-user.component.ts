import { Component } from '@angular/core';
import { UserDeletorService } from '../../services/user/user-deletor.service';


@Component({
	selector: 'delete-user',
	templateUrl: './delete-user.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserComponent {

	heading = 'Self Destruct?';
	tonto = {
		src: '../../../assets/tonto.jpg',
		width: 200,
		height: 615
	};


	constructor(private __userDeletor: UserDeletorService) {
	}


	async delete() {
		let result = await this.__userDeletor.delete();
	}


}
