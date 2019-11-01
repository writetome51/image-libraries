import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { UserDeletionProcessorService }
	from '../../services/user/user-deletion-processor/user-deletion-processor.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';


@Component({
	selector: 'delete-user-form',
	templateUrl: './delete-user-form.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserFormComponent implements OnInit {

	heading = 'Self Destruct?';
	tonto = {
		src: '../../../assets/tonto.jpg',
		width: 200,
		height: 615
	};


	constructor(
		public currentUser: CurrentUserService,
		private __userDeletionProcessor: UserDeletionProcessorService,
		private __dataOperationStatus: DataOperationStatusService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async delete() {
		this.__dataOperationStatus.waitingForResult = true;
		await this.__userDeletionProcessor.process();
		this.__dataOperationStatus.waitingForResult = false;
	}


}
