import { Injectable } from '@angular/core';
import { DirectProcessor } from '@interfaces/direct-processor';
import { LocalZoomOnScrollService }
	from '@services/item-in-local-storage/local-zoom-on-scroll.service';


@Injectable()
export class ToggleZoomOnScrollingProcessorService implements DirectProcessor {

	process(data: { localZoomOnScroll: LocalZoomOnScrollService, checked: boolean }) {
		let zoomOnScroll: { enabled: boolean } = data.localZoomOnScroll.get();

		zoomOnScroll.enabled = !(zoomOnScroll.enabled);
		data.checked = zoomOnScroll.enabled;

		data.localZoomOnScroll.set(zoomOnScroll);
	};

}
