import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() title:string;
  @Input() subtitle:string;
  @Input() category:string;
  @Input() description:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=> {
      console.log(params.get('title'));
      this.title = params.get('title');
      // this.subtitle = params.get('stitle');
      // this.category = params.get('cat');
      this.description = params.get('desc');
    });

  }

}
