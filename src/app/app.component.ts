import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  profileForm = new FormGroup({
    name: new FormControl(''),
    modality: new FormControl('Unidiciplinaria'),
    experience :new FormControl(''),
    career:new FormControl('Ingenieria Civil'),
    adviser:new FormControl(''),
    cycle:new FormControl(''),
    vence:new FormControl('')

		
  });

  constructor(private httpClient: Http) { }

  ngOnInit() {
      
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    var data : any;
    data = this.profileForm.value;
    console.log(data);
    return this.httpClient.post('https://serviceuas.herokuapp.com/',data);

  }

  
}
