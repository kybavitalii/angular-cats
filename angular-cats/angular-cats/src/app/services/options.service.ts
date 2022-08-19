import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
export class OptionsService {
  breed: string;
  id: string;
  length: number;
  pageEvent: PageEvent;
  page: number;
  limit: number;

  setBreed(breed: string) {
    this.breed = breed;
  }

  getBreed() {
    return this.breed;
  }

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setLimits(limit: number, page: number) {
    this.limit = limit;
    this.page = page;
  }

  getLimits() {
    return this.limit, this.page;
  }

  // agentBreed() {
  //   console.log(this.id);
  // }
}
