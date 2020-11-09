import { Injectable } from '@angular/core';
import { ZoomOnScrollData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { DirectProcessor } from '@interfaces/direct-processor';


@Injectable()
export class ToggleZoomOnScrollingProcessorService implements DirectProcessor {

	process(data: {zoomOnScroll: typeof ZoomOnScrollData, checked: boolean}) {
		data.zoomOnScroll.enabled = !(data.zoomOnScroll.enabled);
		data.checked = data.zoomOnScroll.enabled;
	};

}
