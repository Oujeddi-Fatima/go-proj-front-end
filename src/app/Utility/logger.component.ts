
export interface ILogger {
    log();
}


export class BaseLogger implements ILogger{
    log(){
        console.log("Base Logger")
    }
}

export class DBLogger implements ILogger{
    log(){
        console.log("DB Logger")
    }
}

export class ConsoleLogger implements ILogger{
    log(){
        console.log("Console Logger")
    }
}