import { OnInit } from '@angular/core';
import { ClearFormOnInitComponent } from './clear-form-on-init.component';
import { AlertService as alert} from './services/alert.service';


export abstract class ClearFormAndAlertOnInitComponent extends ClearFormOnInitComponent
	implements OnInit {

	ngOnInit() {
		super.ngOnInit();
		alert.clear();
	}

}
