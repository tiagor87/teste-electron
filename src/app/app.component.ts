import { HelloWorldService } from './hello-world.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pessoas: any;
  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit(): void {
    this.helloWorldService.getHelloWorld().subscribe(data => {
      this.pessoas = data;
    });
  }
}
