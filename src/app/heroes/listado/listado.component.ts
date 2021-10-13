import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[]=['Spiderman','Iroman','Hulk','Thor','Capitan America'];
  heroeBorrado: string ='...';

borrarHeroe()
{
  console.log("borrando....");
 /*  this.heroes.splice(3,1); ALT+SHIT+A */  
 
this.heroeBorrado = this.heroes.shift() || '...';

}

}
