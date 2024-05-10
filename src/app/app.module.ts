// Данный модуль является входной точкой в приложение.
// С помощью директив import импортируется ряд необходимых модулей.

import { NgModule } from '@angular/core'; // функциональность декоратора NgModule для создания текущего модуля
import { BrowserModule } from '@angular/platform-browser'; // модуль, необходимый для работы с браузером
import { FormsModule } from '@angular/forms'; // модуль, необходимый для работы с формами html
import { AppComponent } from './app.component'; // функциональность корневого компонента приложения
import { HttpClientModule } from '@angular/common/http';

// Функция-декоратор @NgModule ассоциирует метаданные с классом модуля AppModule.
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule], // другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
    declarations: [AppComponent], //  классы представлений (view classes), которые принадлежат модулю
    bootstrap: [AppComponent], // корневой компонент, который вызывается по умолчанию при загрузке приложения
	exports:      [ ], // набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
    providers:    [ ] // классы, создающие сервисы, используемые модулем
})
export class AppModule { }