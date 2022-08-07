import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css'],
})
export class ErrorComponentComponent implements OnInit {
  constructor(public errorService: ErrorService) {}

  ngOnInit(): void {}
}
