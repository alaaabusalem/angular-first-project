import { AfterViewInit, Component,TemplateRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  name = 'Alaa';
  title = 'Alaa';
  testrevese='hi my name is alaa'
  @ViewChild('myTemplate') myTemplateRef: TemplateRef<any>;

  ngAfterViewInit() {
    // You can now access the TemplateRef in the component
    console.log(this.myTemplateRef);
}
}
