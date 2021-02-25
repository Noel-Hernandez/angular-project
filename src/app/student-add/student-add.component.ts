import { Component, OnInit, Input} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  @Input() studentData = { studentId: 0, description:'', address:'', contact:'',email:'',status:''};


  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
  }

  addStudent() {
    this.rest.addStudent(this.studentData).subscribe((result) => {
      this.router.navigate(['/students']);
    }, (err) => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['/students']);
  }



}
