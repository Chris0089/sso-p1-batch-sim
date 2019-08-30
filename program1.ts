const initialStatus = "Queue";

class App{
    private elapsedTime:number;
    private batchList:Array<Batch>
    private batchCount: number;

    constructor(){
        this.elapsedTime = 0;
        this.batchList = [];
        this.batchCount = 0;
    }

    createNewBatch(){
        const batch = new Batch();
        this.batchList.push(batch);
        this.batchCount++;
    }

    createNewProcess(
        devName:string, 
        firstVal:number, 
        secondVal: number, 
        operator:string,
        timeOfProcess: number)
    {
        const process = new Process(
            devName, 
            firstVal, 
            secondVal, 
            operator,
            timeOfProcess
        );
        this.addProcessToBatch(process);
    }

    addProcessToBatch(newProcess: Process){
        if(this.batchList[this.batchCount-1].getProcessInBatch() >= 4){
            this.createNewBatch();
        }
        this.batchList[this.batchCount-1].addProcess(newProcess);
    }
    runProgram(){

    }
    refreshView(){

    }
}

class Batch{
    private processCount:number;
    private processList:Array<Process>;
    
    constructor(){
        this.processCount = 0
        this.processList = [];
    }
    addProcess(newProcess:Process){
        this.processList.push(newProcess);
        this.processCount++;
    }
    getProcessInBatch(){
        return this.processCount;
    }
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
    private resolveOp(){
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