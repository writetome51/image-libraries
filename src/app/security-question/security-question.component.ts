import { Component, OnInit } from '@angular/core';
import { haveReceivedQuestion } from './have-received-question.service';
import { CurrentUserService as currentUser} from '../services/user/current-user.service';


@Component({
	selector: 'security-question',
	templateUrl: './security-question.component.html'
})
export class SecurityQuestionComponent implements OnInit {

	heading = 'Security Question';
	haveReceivedQuestion = haveReceivedQuestion;


	get question(){
		return currentUser.question;
	}


	ngOnInit() {
	}

}
