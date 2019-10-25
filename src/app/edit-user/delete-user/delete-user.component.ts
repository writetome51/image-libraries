import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { UserDeletionProcessorService }
	from '../../services/user/user-deletion-processor/user-deletion-processor.service';
import { DataOperationBegunService } from '../../services/data-operation-begun.service';
import { UserValidationRulesService } from '../../services/user/user-validation-rules.service';


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
		public userValidationRules: UserValidationRulesService,
		private __userDeletionProcessor: UserDeletionProcessorService,
		private __dataOperationBegun: DataOperationBegunService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async delete() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__userDeletionProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}
