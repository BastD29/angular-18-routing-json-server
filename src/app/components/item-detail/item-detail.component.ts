import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent {
  itemId$!: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) {}

  // ngOnInit() {
  //   this.itemId$ = this.route.params.pipe(
  //     map((params) => +params['id']),
  //     switchMap((id) => this.itemService.getItemById(id))
  //   );
  // }

  ngOnInit() {
    this.itemId$ = this.route.params.pipe(
      switchMap((params) => {
        const id = +params['id'];
        return this.itemService.getItemById(id).pipe(map((item) => item.id));
      })
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
