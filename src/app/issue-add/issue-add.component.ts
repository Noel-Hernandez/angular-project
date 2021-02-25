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
        descripcion: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        address: ['', [Validators.required]],
        service: ['your service', [Validators.required]],
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
    this.router.navigate(['/students']);
  }


  get issueId() { return this.issueForm.get('issueId'); }
  get descripcion() { return this.issueForm.get('descripcion'); }
  get email() { return this.issueForm.get('email'); }
  get phone() { return this.issueForm.get('phone'); }
  get address() { return this.issueForm.get('address'); }
  get service() { return this.issueForm.get('service'); }

}
