import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ComponentsModule } from '../../components/components.module';
//crear una interface para definir propiedades que el componente lista va a tener
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
 })
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;
  constructor(private menuCtrl: MenuController,
      private dataService: DataService) { }
ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
}
mostrarMenu() {
     this.menuCtrl.open('first');
}
}
