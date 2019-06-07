import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ImageStoreService {

    images: { name: string, src: string, description: string }[] = [
        {
            name: 'image1',
            src: 'https://m.media-amazon.com/images/M/MV5BZTQwOWQzMzQtNDA1ZS00YTYxLWEwMTMtOTg1ZWY1NTJlMjg2XkEyXkFqcGdeQXVyNzE0OTQ3MDc@._V1_SY1000_SX1000_AL_.jpg',
            description: ''
        },
        {
            name: 'image2',
            src: 'https://m.media-amazon.com/images/M/MV5BYzUzMWY0OGMtZDk4Ni00YzVkLTk4ZWQtZjNiY2VmNDVmMTFlXkEyXkFqcGdeQXVyNDU2NzYyNDY@._V1_.jpg',
            description: ''
        }
    ];

}
