import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ImageStoreService {

    images: { name: string, src: string, description: string }[] = [
        {
            name: 'image1',
			// tslint:disable-next-line:max-line-length
            src: 'https://m.media-amazon.com/images/M/MV5BZTQwOWQzMzQtNDA1ZS00YTYxLWEwMTMtOTg1ZWY1NTJlMjg2XkEyXkFqcGdeQXVyNzE0OTQ3MDc@._V1_SY1000_SX1000_AL_.jpg',
            description: ''
        },
        {
            name: 'image2',
			// tslint:disable-next-line:max-line-length
            src: 'https://m.media-amazon.com/images/M/MV5BYzUzMWY0OGMtZDk4Ni00YzVkLTk4ZWQtZjNiY2VmNDVmMTFlXkEyXkFqcGdeQXVyNDU2NzYyNDY@._V1_.jpg',
            description: ''
        },
        {
            name: 'image3',
            src: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Megan_Fox_Rachael_Taylor_Transformers_Sydney_Premiere_Crop.jpg',
            description: ''
        },
        {
            name: 'image4',
            src: 'https://i.pinimg.com/originals/b4/c4/a8/b4c4a8632e28b589f7b4968a7de18b35.jpg',
            description: ''
        },
    ];

}
