import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  items$!: Observable<Item[]>;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items$ = this.itemService.getItems();
  }
}
