import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', ()=>{

    let loggerSpy: any;
    let calculatorService: CalculatorService;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        calculatorService = new CalculatorService(loggerSpy);
    })

    it('should be two numbers', ()=>{
        const result = calculatorService.add(2,2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', ()=>{
        const result = calculatorService.subtract(2,2);
        expect(result).toBe(0);
    });
})