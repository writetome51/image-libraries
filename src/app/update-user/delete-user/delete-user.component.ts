import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { UserDeletionProcessorService }
	from '../../services/user/user-deletion-processor/user-deletion-processor.service';


@Component({
	selector: 'delete-user',
	templateUrl: './delete-user.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserComponent implements OnInit {

	heading = 'Self Destruct?';
	tonto = {
		src: '../../../assets/tonto.jpg',
		width: 200,
		height: 615
	};


	constructor(
		public currentUser: CurrentUserService,
		private __userDeletionProcessor: UserDeletionProcessorService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	delete(): void {
		this.__userDeletionProcessor.process();
	}


}
