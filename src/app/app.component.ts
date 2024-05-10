// Директива import импортирует функциональность модуля angular/core,
// предоставляя доступ к функции декоратора @Component.
import { Component, OnInit } from "@angular/core";
import { ImagesService } from "./images.service";
import { Images } from "./images";


// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImagesService]
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent implements OnInit {
  images: Images[] = [];
  selectedImageUrl: Images | null = null;

  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.loadPaintings();
  }

  onSelectImage(image: Images) {
    this.selectedImageUrl = image;
  }

  private loadPaintings() {
    this.imagesService.getImages().subscribe(
      paintings => {
        this.images = paintings;
      },
      error => {
        alert('Failed to load paintings: ' + error);
      }
    );
  }
}
