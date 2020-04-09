"use strict";


class Device {
	constructor(name){
		this._name = name;
		this._status = false;
		//this._temperature = 28;// ??? температуры по умол. разные
		//this._modes = ["tropics", "pole", "dry", "fan"];//по умол. разные
		this._currentMode = 0;
		
	}
	get name(){ 
		return this._name;
	}
	
	get status(){ 
		return this._status
	}
	on(){ 
		this._status = true;
	} 
	off(){ 
		this._status = false;
	}
	/*increaseTemperature(){
		if(this._temperature < 35){// 
			this._temperature++;
		}
	}
	decreaseTemperature(){
		if(this._temperature > 15){// 
			this._temperature--;
		}
	}*/
	/*set temperature(value) { // 
		if(typeof value == "number" && value <= 35 && value >= 15){
         this._temperature = value;
		}
   }*/
		
	get temperature(){
		return this._temperature;
	}
	getMode() {
		return this._modes[this._currentMode]; 
	}
	getModes(){
		return this._modes;
	}	
	setMode(value) {
      	this._currentMode = this._modes.indexOf(value);
		/*for(let i = 0; i < this._modes.length; i++){
			if(value == this._modes[i]){
				this._currentMode = i;
			}
		}*/	
	}
	addMode(value) { 
		if(typeof value == "string" && value.length <= 12){
			this._modes.push(value);
		}
	}
	nextMode() {
		if(this._currentMode < this._modes.length - 1){
			this._currentMode++;
		}
	}
	previousMode() {
		if(this._currentMode > 0){
			this._currentMode--;
		}
	}
}	
class AirConditioning extends Device {
	constructor(name, roomName){
		super(name);
		//super(name, status, currentMode);
		this._roomName = roomName;
		//this._name = name;
		//this._status = false;
		this._temperature = 20;
		this._modes = ["tropics", "pole", "dry", "fan"];
		//this._currentMode = 0;
		
	}
	get roomName(){
		return this._roomName;
	}
	
	
	increaseTemperature(){
		if(this._temperature < 35){
			this._temperature++;
		}
	}
	decreaseTemperature(){
		if(this._temperature > 15){
			this._temperature--;
		}
	}
	set temperature(value) { //  1й вар, упрощенный
		if(typeof value == "number" && value <= 35 && value >= 15){
         this._temperature = value;
		}
   }
		
}
// без decreaseTemperature,increaseTemperature 
class WashingMachine extends Device {
	constructor(name){
		super(name);
		this._temperature = 30;
		this._modes = ["wash", "intensive_wash", "rinse", "spin", "drain"];
				
	}
	set temperature(value) { 
		if(typeof value == "number" && value <= 60 && value >= 15){
         this._temperature = value;
		}
   }
}	

let airBedroom = new AirConditioning("airBedroom", "Bedroom");
let washingMachine = new WashingMachine("washingMachine");

console.log(airBedroom.name);
console.log(airBedroom.roomName);
console.log(airBedroom.status);
airBedroom.on();
console.log(airBedroom.status);
console.log(airBedroom._temperature);//!! если просто temperature - undefined
airBedroom.increaseTemperature();
console.log(airBedroom._temperature);
airBedroom.decreaseTemperature();
console.log(airBedroom._temperature);
airBedroom.temperature = 16;//36 уже не ставит
console.log(airBedroom._temperature);
console.log(airBedroom.getMode());
console.log(airBedroom.getModes());
airBedroom.setMode("pole");
console.log(airBedroom.getMode());
airBedroom.addMode("temperate");//"temperate123456" - не добавил
airBedroom.setMode("temperate");
console.log(airBedroom.getMode());
console.log(airBedroom.getModes());
airBedroom.previousMode();
console.log(airBedroom.getMode());
airBedroom.nextMode();
console.log(airBedroom.getMode());
airBedroom.temperature = 35;
console.log(airBedroom._temperature);
//стиралка
console.log(washingMachine.name);
console.log(washingMachine.status);
washingMachine.on();
console.log(washingMachine.status);
console.log(washingMachine._temperature);//!! если просто temperature - undefined
washingMachine.temperature = 16;
console.log(washingMachine._temperature);
console.log(washingMachine.getMode());
console.log(washingMachine.getModes());
washingMachine.setMode("spin");
console.log(washingMachine.getMode());
washingMachine.addMode("temperate");//"temperate123456" - не добавил
washingMachine.setMode("temperate");
console.log(washingMachine.getMode());
console.log(washingMachine.getModes());
washingMachine.previousMode();
console.log(washingMachine.getMode());
washingMachine.nextMode();
console.log(washingMachine.getMode());
washingMachine.temperature = 35;
console.log(washingMachine._temperature);