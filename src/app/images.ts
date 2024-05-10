export class Images {
    title: string;
    imageUrl: string;
    year: number;
    author: string;
    size: string;
    location: string;

    constructor(title: string, imageUrl: string, year: number, author: string, size: string, location: string) 
    {
        this.title = title;
        this.imageUrl = imageUrl;
        this.year = year;
        this.author = author;
        this.size = size;
        this.location = location;
    }
}
