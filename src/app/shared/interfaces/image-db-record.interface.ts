import { AppImage } from './app-image.interface';
import { HasIDKey } from './has-id-key.interface';
import { HasUserIDKey } from './has-user-id-key.interface';


export interface ImageDBRecord extends AppImage, HasIDKey, HasUserIDKey {}
