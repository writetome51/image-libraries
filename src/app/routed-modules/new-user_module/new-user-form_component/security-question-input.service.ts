import { Injectable } from '@angular/core';
import { UserValidationRuleData as rules } from '@read-only-data/user-validation-rule.data';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';
import { NewUserServicesModule } from '../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class SecurityQuestionInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'security-question-input';
		this.data.propertyToBind = 'question';
		this.data.label = 'Question';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.questionMinLength
		);
		this.data.errorMessage =
			`The security question must be at least ${rules.questionMinLength} characters`;
		this.data.prompt =
			'Create a security question to ask yourself if you can\'t remember your password:';
	}

}
