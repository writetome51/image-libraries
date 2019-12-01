import { Component, OnInit } from '@angular/core';
import { gettingQuestion } from './getting-question.service';


@Component({
	selector: 'security-question',
	templateUrl: './security-question.component.html'
})
export class SecurityQuestionComponent implements OnInit {

	heading = 'Security Question';
	gettingQuestion = gettingQuestion;


	constructor() {
	}


	ngOnInit() {
	}

}
