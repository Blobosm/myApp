import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs/internal/observable/of';
import { TestService } from '../service/test.service';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  const mockedTestService = jasmine.createSpyObj('TestService', ['sumar']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [{
        provide: TestService,
        useValue: mockedTestService
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doSumar() OK', () => {
    mockedTestService.sumar.and.returnValue(9);
    component.entrada.numero1=4;
    component.entrada.numero2=5;
    component.doSumar();
    expect(component.mensaje).toBe("La suma es: 9");
  });
});
