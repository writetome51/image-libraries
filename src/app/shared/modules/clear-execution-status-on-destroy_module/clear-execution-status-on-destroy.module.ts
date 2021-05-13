import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearExecutionStatusOnDestroyDirective }
	from './clear-execution-status-on-destroy.directive';


@NgModule({
	declarations: [ClearExecutionStatusOnDestroyDirective],
	imports: [CommonModule],
	exports: [ClearExecutionStatusOnDestroyDirective]
})
export class ClearExecutionStatusOnDestroyModule {}
