import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';


@Component({
	selector: 'update-user-email',
	templateUrl: './update-user-email.component.html'
})
export class UpdateUserEmailComponent implements OnInit {

	constructor(public currentUser: CurrentUserService) {
	}


	ngOnInit() {
	}

}
