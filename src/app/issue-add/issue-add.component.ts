import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { RestService } from '../rest.service';



@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css']
})
export class IssueAddComponent implements OnInit {

  @Input() issueData = { issueId: 0, descripcion:'',time:'' , address: '', phone: '',email: '',reportStatus:'' ,Id:0, service: 0};

  services: any [];
  //issueForm: FormGroup;
  errorMessage: any;
  
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) {
      /*
      this.issueForm = this.fb.group ({
        issueId: 0,
        descripcion: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        address: ['', [Validators.required]],
        Id: ['', [Validators.required]],
        service:[2,[Validators.required]],
        time:['']                  
    })
*/
}

/*
 // Getter method to access formcontrols
 get service() {
  return this.issueForm.get('service');
}
*/
  ngOnInit(): void {
    this.loadServices();
  }

  addIssue() {
    this.rest.addIssue(this.issueData).subscribe((result) => {
      this.router.navigate(['/issue-list']);
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
  //get service() { return this.issueForm.get('service'); }
  get Id(){ return this.issueForm.get('Id'); }
  get time(){ return this.issueForm.get('time'); }
*/
}
