import { HttpHeaderResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, pipe, tap } from 'rxjs';
import { OptionsService } from 'src/app/services/options.service';
import { ICat } from '../../../models/cat.model';
import { CatsService } from '../../../services/cats.services';

@Component({
  selector: 'app-paginator-component',
  templateUrl: './paginator-component.component.html',
  styleUrls: ['./paginator-component.component.css'],
})
export class PaginatorComponentComponent implements OnInit {
  responseToAPI$: Observable<ICat[]>;
  id: string;
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  index = 1;

  @Output() choose: EventEmitter<any> = new EventEmitter();
  @Output() limits: EventEmitter<any> = new EventEmitter();

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  constructor(
    private catsService: CatsService,
    private options: OptionsService
  ) {}

  @Input() cat: ICat;

  ngOnInit(): void {
    this.responseToAPI$ = this.catsService
      .getAll(this.catsService.search, this.catsService.options)
      .pipe(tap((next) => next.forEach(() => this.length++)));
    // this.options.setLimits(this.pageSize, this.index);
  }

  setId(id: string): void {
    this.options.setId(id);
  }

  setLimits(pageSize: number, pageIndex: number): void {
    this.limits.emit(null);
    // pageIndex += 1;
    this.options.setLimits(pageSize, pageIndex);
    console.log(pageSize, pageIndex);
  }

  onChange(): void {
    this.choose.emit(null);
  }
}
