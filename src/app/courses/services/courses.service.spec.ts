import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";

describe('CoursesService', () => {

    let coursesService: CoursesService, httpTestingController: HttpClientTestingModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CoursesService,
            ]
        });

        coursesService = TestBed.get(CoursesService);
        httpTestingController = TestBed.get(HttpClientTestingModule);
    });

    it('should retrieve all courses', () => {
        
    });
});