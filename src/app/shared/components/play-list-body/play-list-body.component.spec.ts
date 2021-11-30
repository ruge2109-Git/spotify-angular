import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdelistPipe } from '@shared/pipe/ordelist.pipe';

import { PlayListBodyComponent } from './play-list-body.component';

describe('PlayListBodyComponent', () => {
  let component: PlayListBodyComponent;
  let fixture: ComponentFixture<PlayListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PlayListBodyComponent,
        OrdelistPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
