import { Component } from '@angular/core';
import {Hero} from "./model/Hero";

@Component({
  selector: 'app-root',
  styles : [
    `.label{
      display: block;
      color : rgba(0,0,0,0.5);
    }`,
    `*{
      font-family: SansSerif,sans-serif;
      font-weight: bold;
    }`
  ],
  template : `
    <h3>{{title}}</h3>
    <!--<span>Contoh Input dengan keyEvent</span><br/>-->
    <!--<div>-->
      <!--<input (keyup)="keyUpListener($event)"/><br/>-->
      <!--<p>{{result}}</p>-->
    <!--</div>-->
    <!---->
    <!--<span>Contoh input dengan key.enter</span><br/>-->
    <!--<div>-->
      <!--<input #box (keyup.enter) = "onEnterKey(box.value)"/>-->
      <!--<p>{{boxValue}}</p>-->
    <!--</div>-->
    <!---->
    <!--<span>Contoh input dengan template reference variable</span>-->
    <!--<div>-->
      <!--<input #ipt (keyup)="iptValue=ipt.value"/>-->
      <!--<p>{{iptValue}}</p>-->
    <!--</div>-->
    <!---->
    <!--<span>input event (blur)</span>-->
    <!--<div>-->
      <!--<input #i (blur)="0"/>-->
      <!--<p>{{i.value}}</p>-->
    <!--</div>-->
    <!---->
    <!--<span>input event (focus)</span>-->
    <!--<div>-->
      <!--<input #f (focus)="0"/>-->
      <!--<p>{{f.value}}</p>-->
    <!--</div>-->
    <!--<p>{{result}}</p>-->
    <form style="display : inline-block;" #heroForm = "ngForm">
      
      <div>
        <span class="label">Name</span>
        <input [(ngModel)] = "hero.name" name="name"  #iName = "ngModel" required/>
        <span  [hidden] = "iName.pristine || iName.valid">Name is required</span>
      </div>
      
      <div>
        <span class="label">Alter Ego</span>
        <input [(ngModel)] = "hero.alterEgo" name="alterEgo" class="text"/>
      </div>
      
      <div>
        <span class="label">Hero Power</span>
        <select [(ngModel)] = "hero.power" style="width: 100%" name="power" required >
          <option *ngFor="let power of heroesPower" [value] = "power">
            {{power}}
          </option>
        </select>
      </div>
      
      <button style="margin-top : 10px;" (click)="submitHero()" [disabled] = "!heroForm.form.valid">Submit</button>
      <button style="margin-top : 10px;" (click)="newHero(); validData = false;">Reset</button>
    </form>
    
    <div [hidden] = "validData === false">
      <div>Hero Name : {{hero.name}}</div>
      <div>Alter Ego : {{hero.alterEgo}}</div>
      <div>Hero Power : {{hero.power}}</div>
    </div>
  `
})
export class AppComponent {
  title = 'Template-driven forms';
  hero = new Hero("","","");
  heroesPower = ['Power A','Power B','Power C'];
  validData = false;

  submitHero(){
    console.log(
      JSON.stringify(this.hero)
    );
    this.validData = true;
  }

  // onClick(heroForm , iName){
  //   console.log(iName);
  // }
  // result = "";
  // boxValue = "";
  // iptValue = "";
  //
  // onChange(value : string){
  //   this.iptValue = value;
  // }
  //
  // onEnterKey(value : string){
  //   this.boxValue = value;
  // }
  // keyUpListener(event : KeyboardEvent){
  //   this.result = (<HTMLInputElement>event.target).value;
  //   console.log(event);
  // }
  get result(){
    return JSON.stringify(this.hero);
  }

  newHero() {
    this.hero = new Hero('','','');
  }
}
