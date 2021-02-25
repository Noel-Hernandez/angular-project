import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-student-add-validate',
  templateUrl: './student-add-validate.component.html',
  styleUrls: ['./student-add-validate.component.css']
})
export class StudentAddValidateComponent implements OnInit {

  studentForm: FormGroup;
  errorMessage: any;

   constructor(private fb: FormBuilder, private route: ActivatedRoute,
        private rest:RestService, private router: Router) {
        

          this.studentForm = this.fb.group({
            studentId: 0,
            name: ['', [Validators.required]],
            email: ['', [Validators.required]],
            password: new FormControl('', [
              Validators.required,
              Validators.pattern('^[0-9]{5,8}$')
            ])
        })

    }


  ngOnInit() {
  }

  addStudent() {

    if (!this.studentForm.valid) {
      return;
    }

    this.rest.addStudent(this.studentForm.value).subscribe((result) => {
      this.router.navigate(['/students']);
    }, (err) => {
      console.log(err);
    });
  }
cancel(){}




  get employeeId() { return this.studentForm.get('studentId'); }
  get name() { return this.studentForm.get('name'); }
  get email() { return this.studentForm.get('email'); }
  get password() { return this.studentForm.get('password'); }
}
