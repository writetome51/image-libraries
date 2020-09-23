// Represents a record in a db 'join-image-library' collection.
// images and libraries have a 'many-to-many' relationship.

export interface DBJoinImageLibrary {

	_id: string; // unique, never changes. Primary key

	_image_id: string; // Foreign key, relating to DBImage._id

	_library_id: string; // Foreign key, relating to DBLibrary._id
}
