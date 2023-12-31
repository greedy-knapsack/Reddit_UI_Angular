import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTitleComponent } from './post-tile.component';

describe('PostTitleComponent', () => {
  let component: PostTitleComponent;
  let fixture: ComponentFixture<PostTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
