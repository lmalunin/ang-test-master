import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from "../../app-routing.module";
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {COURSES} from '../../../../server/db-data';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {sortCoursesBySeqNo} from '../home/sort-course-by-seq';
import {Course} from '../model/course';
import {setupCourses} from '../common/setup-test-data';




describe('CoursesCardListComponent', () => {

    beforeEach(_ => {
        TestBed.configureTestingModule({
            imports:[
                CoursesModule,
            ]
        });
    })

  it("should create the component", () => {

   pending();

  });


  it("should display the course list", () => {

    pending();

  });


  it("should display the first course", () => {

      pending();

  });


});


