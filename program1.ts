const initialStatus = "Queue";

class Batch{

}

class Process{

        private developer:string;
        private value1:number;
        private value2:number;
        private operator: string;
        private result: number;
        private estimatedTime: number;
        private elapsedTime: number;
        private status: string;

    constructor(
        devName:string, 
        firstVal:number, 
        secondVal: number, 
        operator:string,
        timeOfProcess: number,
        ){
        this.developer = devName;
        this.value1 = firstVal;
        this.value2 = secondVal;
        this.operator = operator;
        this.estimatedTime = timeOfProcess;
        this.status = initialStatus;
        this.result = 0;
        this.resolveOp();
        this.elapsedTime = 0;
    }
    resolveOp(){
        if (this.operator == "+"){
            this.result = this.value1 + this.value2;
        }else if(this.operator == "-"){
            this.result = this.value1 - this.value2;
        }else if(this.operator == "*"){
            this.result = this.value1 * this.value2;
        }else if(this.operator == "/"){
            this.result = this.value1 / this.value2;
        }else if(this.operator == "^"){
            this.result = this.value1 ^ this.value2;
        }else if(this.operator == "%"){
            this.result = this.value1 % this.value2;
        }
    }
}

//const process1 = new Process();
