import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';



@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css']
})
export class IssueAddComponent implements OnInit {

  @Input() issueData = { issueId: 0, descripcion:'', email: '', phone: '', address: '',Id:0, service: 0};

  services: any [];
 




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
        Id: ['', [Validators.required]]
    })

}

  ngOnInit(): void {
    this.loadServices();
  }

  addIssue() {

    this.rest.addIssue(this.issueForm).subscribe((result) => {
      this.router.navigate(['/issues']);
    }, (err) => {
      console.log(err);
    });
  }



  cancel() {
    this.router.navigate(['/app-home']);
  }

  loadServices(){
    this.rest.getServices().subscribe(data => {
      this.services = data;
    })
  }


/*
  get issueId() { return this.issueForm.get('issueId'); }
  get descripcion() { return this.issueForm.get('descripcion'); }
  get email() { return this.issueForm.get('email'); }
  get phone() { return this.issueForm.get('phone'); }
  get address() { return this.issueForm.get('address'); }
  get service() { return this.issueForm.get('service'); }
  get Id(){ return this.issueForm.get('Id'); }
  */
}
