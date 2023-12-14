import { Component, inject } from '@angular/core';
import { MaterialsModule } from '../../shared/materials/materials.module';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly auth = inject(AuthService)
  loginRedirect(){
    this.auth.loginWithRedirect()
  }
}
