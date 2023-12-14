import { Component, inject } from '@angular/core';
import { MaterialsModule } from '../../shared/materials/materials.module';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  private readonly auth = inject(AuthService)
  loginRedirect(){
    this.auth.loginWithRedirect()
  }
}
