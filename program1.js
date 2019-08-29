var Batch = /** @class */ (function () {
    function Batch() {
    }
    return Batch;
}());
var Process = /** @class */ (function () {
    function Process() {
        this.developer = "Generic Name";
        this.value1 = 0;
        this.value2 = 0;
        this.operator = "+";
        this.result = 0;
        this.estimatedTime = 1;
        this.elapsedTime = 0;
        this.status = "Queue";
    }
    return Process;
}());
var process1 = new Process();
