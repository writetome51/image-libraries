import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'security-question',
	templateUrl: './security-question.component.html'
})
export class SecurityQuestionComponent implements OnInit {

	heading = 'Security Question';
	gettingQuestion = true;


	constructor() {
	}


	ngOnInit() {
	}

}
