import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports:[HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Invalid form', () => {
    //TOOD: Arrange
    const mockCredentials = {
      email: 'asdasda',
      password: '11111111111111111111111111'
    };
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');

    //TODO: Act
    emailForm?.setValue(mockCredentials.email);
    passwordForm?.setValue(mockCredentials.password);

    //TODO:Assert
    expect(component.formLogin.invalid).toBeTrue();
  });

  it('Valid form', () => {
    //TOOD: Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    };
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');

    //TODO: Act
    emailForm?.setValue(mockCredentials.email);
    passwordForm?.setValue(mockCredentials.password);

    //TODO:Assert
    expect(component.formLogin.invalid).toBeFalse();
  });

  it('the button should have a text with the name "Iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const innertText = elementRef.nativeElement.innerText;
    expect(innertText).toEqual('Iniciar sesión');
  })

});
