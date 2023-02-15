import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', ()=>{

    it('should be two numbers', ()=>{
        const logger = jasmine.createSpyObj('LoggerService', ['log']);
        const calculatorService = new CalculatorService(logger);
        const result = calculatorService.add(2,2);
        expect(result).toBe(4);
        expect(logger.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', ()=>{
        const calculatorService = new CalculatorService(new LoggerService());
        const result = calculatorService.subtract(2,2);
        expect(result).toBe(0);
    });
})