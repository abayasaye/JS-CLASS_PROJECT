// CLASS1
class CarsBrands {
    constructor(wheelsNum, engineCar ,carColor ){
        this.wheelsNum = wheelsNum;
        this.engineCar = engineCar;
        this.carColor = carColor;
    }
    static StaticMethod (Array) {
        let maxEngine = staticArray[0];
            Array.forEach(item => {
            if(item.engineCar > maxEngine.engineCar){
                maxEngine = item;
                console.log(maxEngine)
            }
        }
        
        ); 
        
    }   
    carsFunc(){
        return `wheelsNum: ${this.wheelsNum} ,engineCar: ${this.engineCar}, carColor: ${this.carColor}`
    }
}
let newCars = new CarsBrands(4,2000, "red")
// console.log(newCars.carsFunc());

// CLASS2

// CAR1
class HybridCars extends CarsBrands {
    constructor(wheelsNum, engineCar ,carColor,carName){
        super(wheelsNum, engineCar ,carColor)
        this.carName = carName;
    }
    carsFunc(){
        return ` ${super.carsFunc()} ,carName: ${this.carName}`;
    }
}
let newHybrid = new HybridCars( 4 , 1500 , "blue" ,"HYUNDAI")
console.log(newHybrid.carsFunc())

// CAR2
class SportCars extends HybridCars{
    constructor(wheelsNum, engineCar ,carColor,carName){
        super(wheelsNum, engineCar ,carColor)
        this.carName = carName;
        
    }
    carsFunc(){
        return ` ${super.carsFunc()} ,carName: ${this.carName}`;
    }
    
    carNameTuc () {
        return `${this.carName[0].toUpperCase()}${this.carName.substring(1,this.carName.length-1)}${this.carName[this.carName.length-1].toUpperCase()}`
    }
    
    get result() {
        return this.carNameTuc();
    }
}
let newSortCar = new SportCars( 4 , 5000 , "gray" ,"mustang");
console.log(newSortCar.result);

// CAR3
class Motorcycle extends SportCars {
    constructor(wheelsNum, engineCar ,carColor,carName){
        super(wheelsNum, engineCar ,carColor)
        this.carName = carName;
        
    }
    gat 
    carsFunc(){
        return ` ${super.carsFunc()} ,carName: ${this.carName}`;
    }
}
let newMotorcycle = new Motorcycle( 4 , 500 , "black" ,"BMW");
console.log(newMotorcycle.carsFunc())


let staticArray = [newCars,newHybrid,newSortCar,newMotorcycle]
CarsBrands.StaticMethod(staticArray)






function myFunc (){
class UserCar extends Motorcycle {
    constructor(wheelsNum, engineCar ,carColor){
        super(wheelsNum, engineCar ,carColor)
        this.wheelsNum = wheelsNum;
        this.engineCar =engineCar;
        this.carColor = carColor;
        console.log()
        
    }
}
const userCarChose = new UserCar (carType_id.value,name_id.value,engine_id.value)
table_id.innerHTML=`<th>Car Type</th><th>Car Name</th><th>Engine Capacity</th>`
table_id.innerHTML += `<tr><td>${userCarChose.wheelsNum}</td><td>${userCarChose.engineCar}</td><td>${userCarChose.carColor}</td></tr>`
}
