import { AppImage } from '@interfaces/app-image';
import { getDateTimeID } from '@writetome51/get-date-time-id';
import { getRandomInteger } from '@writetome51/get-random-integer-s';

// Supplies default values for any properties not included in `properties`

export class GetAppImageService { // implements IDoThis

	static go(properties: AppImage): AppImage {
		return {
			name: properties['name'] || (getDateTimeID() + '-' + getRandomInteger([1, 1000])),
			src: properties['src'],
			description: properties['description'] || 'image',
			tags: properties['tags'] || [],
			date: properties['date'] || undefined,
			location: properties['location'] || {latitude: undefined, longitude: undefined},
			rating: properties['rating'] || undefined
		};
	}

}
