import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';



@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css']
})
export class IssueAddComponent implements OnInit {


  issueForm: FormGroup;
  errorMessage: any;
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private rest:RestService, private router: Router) {
      this.issueForm = this.fb.group({
        issueId: 0,
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{5,8}$')
        ])
    })

}

  ngOnInit(): void {
  }

  addIssue() {

    if (!this.issueForm.valid) {
      return;
    }

    this.rest.addIssue(this.issueForm.value).subscribe((result) => {
      this.router.navigate(['/issues']);
    }, (err) => {
      console.log(err);
    });
  }



  cancel() {
    this.router.navigate(['/issues']);
  }


  get employeeId() { return this.issueForm.get('studentId'); }
  get name() { return this.issueForm.get('name'); }
  get email() { return this.issueForm.get('email'); }
  get password() { return this.issueForm.get('password'); }


}
