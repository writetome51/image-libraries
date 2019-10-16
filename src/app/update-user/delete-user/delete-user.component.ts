import { Component, OnInit } from '@angular/core';
import { UserDeletorService } from '../../services/user/user-deletor.service';
import { CurrentUserService } from '../../services/user/current-user.service';


@Component({
	selector: 'delete-user',
	templateUrl: './delete-user.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserComponent implements OnInit{

	heading = 'Self Destruct?';
	tonto = {
		src: '../../../assets/tonto.jpg',
		width: 200,
		height: 615
	};


	constructor(
		public currentUser: CurrentUserService,
		private __userDeletor: UserDeletorService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async delete() {
		let result = await this.__userDeletor.delete();
	}


}
