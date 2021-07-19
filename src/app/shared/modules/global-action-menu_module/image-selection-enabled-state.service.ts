import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu_module/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ImageSelectionEnabledStateService extends Subject<{ selectionEnabled: boolean }> {}
