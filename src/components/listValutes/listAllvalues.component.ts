import {Component, OnInit} from '@angular/core';
import {ValuteServce} from '../../services/valute.servce';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'listValutes',
  templateUrl: './listValutes.html',
  styleUrls: ['./listValutes.css']
})
export class ListAllvalues implements OnInit{
  valutes=[];
  show=false;
  showEditSaveFild=false

  forma={
    id: '',
    name:'',
    symbol:'',
    arrayId:""
  }

  constructor(private valueService: ValuteServce){
  }

  ngOnInit() {

    this.getValutes();
  }

  getValutes(){
    this.valueService.listValutes().subscribe(valutes => { this.valutes=this.valutes.concat(valutes)
      console.log(this.valutes)});

  }

  showFormsButton(){

    this.show= !this.show;
    this.showEditSaveFild=false;
    this.forma={
      id: '',
      name:'',
      symbol:'',
      arrayId:""
    }
  }
  delete(event){
    this.valutes.splice(event,1);
  }
  edit(formData,i){
    this.show=true;
    this.showEditSaveFild=true;
    this.forma={
      id: formData.id,
      name: formData.name,
      symbol: formData.symbol,
      arrayId:i
      }


  }

  saveEdit(){
    this.show=false;
    this.valutes[this.forma.arrayId]={
      id: this.forma.id,
      name: this.forma.name,
      symbol: this.forma.symbol,
    }

  }
  added(){
    this.valutes.push({
      id: this.forma.id,
      name: this.forma.name,
      symbol: this.forma.symbol,
    });
  }
}
