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

    constructor(){
        this.developer = "Generic Name";
        this.value1= 0;
        this.value2 = 0;
        this.operator = "+";
        this.result = 0;
        this.estimatedTime = 1;
        this.elapsedTime = 0;
        this.status = "Queue";
    }
}

const process1 = new Process();
