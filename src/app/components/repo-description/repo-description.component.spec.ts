import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDescriptionComponent } from './repo-description.component';

describe('RepoDescriptionComponent', () => {
  let component: RepoDescriptionComponent;
  let fixture: ComponentFixture<RepoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
