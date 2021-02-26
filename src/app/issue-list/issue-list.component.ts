import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {


  issues:any = [];



  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues() {
    this.issues = [];
    this.rest.getIssues().subscribe((data: {}) => {
      console.log(data);
      this.issues = data;
    });
  }

  add() {
    this.router.navigate(['/issue-add']);
  }

  delete(id) {
    this.rest.deleteIssue(id)
      .subscribe(res => {
          this.getIssues();
        }, (err) => {
          console.log(err);
        }
      );
  }










}
