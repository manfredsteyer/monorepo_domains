import { Component } from '@angular/core';
import { BrowseProductsService } from '@e-proc/catalog/domain';

@Component({
  selector: 'e-proc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';

  constructor(private browseProductsService: BrowseProductsService) {

  }
}
