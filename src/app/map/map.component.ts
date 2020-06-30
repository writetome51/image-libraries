import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';


@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	@ViewChild(GoogleMap, { static: false }) map: GoogleMap;
	@ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

	zoom = 18;
	center: google.maps.LatLngLiteral;
	options: google.maps.MapOptions = {
		zoomControl: true,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		mapTypeId: 'hybrid'
	};
	markers = [];
	infoContent = '';


	constructor() {
	}


	ngOnInit(): void {
		navigator.geolocation.getCurrentPosition(x => {
			this.center = {
				lat: x.coords.latitude,
				lng: x.coords.longitude
			};
			this.markers.push({
				position: {
					lat: x.coords.latitude,
					lng: x.coords.longitude
				},
				label: {
					color: 'blue',
					text: 'Marker Label'
				},
				title: 'Marker Title',
				info: 'Marker info',
				options: {
					animation: google.maps.Animation.BOUNCE
				}
			});
		});
	}


}
