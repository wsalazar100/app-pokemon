import { isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPage implements OnInit {


private title= inject(Title);
private meta = inject(Meta);

private plataforma = inject(PLATFORM_ID);

  ngOnInit(): void {
    var esServidor = isPlatformServer(this.plataforma) ? 'Servidor' : 'Navegador';
    if (esServidor === 'Navegador') {
       console.log("ES SERVIDOR",esServidor);
      this.title.setTitle('Acerca de nosotros');
      this.meta.updateTag({ name: 'description', content: 'Seguro Inteligente' });
      this.meta.updateTag({ name: 'keywords', content: 'Seguro, Iteligente, Vehiculo, Prima' });
      this.meta.updateTag({ name: 'og:title', content: 'Seguro Inteligente' });
      this.meta.updateTag({ name: 'og:description', content: 'Seguro Inteligente' });
    } else {
       this.title.setTitle('Acerca de nosotros')
      console.log("ES NAVEGADOR",esServidor);

    }


   ;
    // this.meta.updateTag({ name: 'description', content: 'Seguro Inteligente' });
    // this.meta.updateTag({ name: 'keywords', content: 'Seguro, Iteligente, Vehiculo, Prima' });
    // this.meta.updateTag({ name: 'og:title', content: 'Seguro Inteligente' });
    // this.meta.updateTag({ name: 'og:description', content: 'Seguro Inteligente' });


}




}


