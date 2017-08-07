import { TestBed, inject } from '@angular/core/testing';

import { ListArticlesService } from './list-articles.service';

describe('ListArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListArticlesService]
    });
  });

  it('should ...', inject([ListArticlesService], (service: ListArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
