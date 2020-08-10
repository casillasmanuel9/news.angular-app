import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewsItemComponent } from './list-news-item.component';

describe('ListNewsItemComponent', () => {
  let component: ListNewsItemComponent;
  let fixture: ComponentFixture<ListNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
