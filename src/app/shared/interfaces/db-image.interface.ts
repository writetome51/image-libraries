import { AppImage } from './app-image.interface';
import { HasIDKey } from './has-id-key.interface';
import { HasUserIDKey } from './has-user-id-key.interface';


// Represents a record in a db 'images' collection.

export interface DBImage extends AppImage, HasIDKey, HasUserIDKey {}
