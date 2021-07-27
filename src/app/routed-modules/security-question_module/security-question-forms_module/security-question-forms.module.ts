import { AnswerSecurityQuestionFormModule }
	from './answer-security-question-form_module/answer-security-question-form.module';
import { ResetToDefaultOnInitModule } from '@app/shared/modules/reset-to-default-on-init_module/reset-to-default-on-init.module';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { CommonModule } from '@angular/common';
import { GetSecurityQuestionFormModule }
	from './get-security-question-form_module/get-security-question-form.module';
import { NgModule } from '@angular/core';
import { SecurityQuestionFormsComponent } from './security-question-forms.component';


@NgModule({
	declarations: [SecurityQuestionFormsComponent],
	imports: [
		CommonModule,
		GetSecurityQuestionFormModule,
		AnswerSecurityQuestionFormModule,
		ResetToDefaultOnInitModule,
		ClearAlertsOnDestroyModule,
	],
	exports: [SecurityQuestionFormsComponent]
})
export class SecurityQuestionFormsModule {}
