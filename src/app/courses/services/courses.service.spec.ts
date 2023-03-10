import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { COURSES } from "../../../../server/db-data";
import { CoursesService } from "./courses.service";

fdescribe('CoursesService', () => {

    let coursesService: CoursesService, httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CoursesService,
            ]
        });

        coursesService = TestBed.get(CoursesService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should retrieve all courses', () => {
        coursesService.findAllCourses().subscribe(courses => {
            expect(courses).toBeTruthy('No courses returned');
            expect(courses.length).toBe(12, 'incorrect number of courses');

            const course = courses.find(course => course.id == 12);
            expect(course?.titles.description).toBe('Angular Testing Course');
        });

        const req = httpTestingController.expectOne('/api/courses');
        expect(req.request.method).toEqual('GET');
        req.flush({ payload: Object.values(COURSES) });
    });

    it('should find course by id', () => {
        coursesService.findCourseById(12).subscribe(course => {
            expect(course).toBeTruthy('No course returned');
            expect(course.id).toBe(12, 'incorrect number of course');
        });

        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual('GET');
        req.flush(COURSES[12]);
    });

    afterEach(() => {
        httpTestingController.verify();
    })
});