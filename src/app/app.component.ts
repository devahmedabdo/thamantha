import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'thamantha';
  activeMenu: boolean = false;
  reflectActiveMenu() {
    this.activeMenu = !this.activeMenu;
  }

  services: any = [
    {
      name: 'Makeup for ',
      name2: 'all occasions',
      icon: 'icons8-makeup-brush-100 1.svg',
      dis: `Custom looks for events 
      weddings, photoshoots.`,
    },
    {
      name: 'Makeup',
      name2: 'lessons',
      icon: 'icons8-open-book-100 1.svg',
      dis: `Learn makeup artistry 
      through tailored, hands-on 
      guidance.`,
    },

    {
      name: 'Eyebrow',
      name2: 'Threading',
      icon: 'icons8-tweezers-100 1.svg',
      dis: `Precise, gentle technique for 
      perfectly sculpted eyebrows.`,
    },
    {
      name: 'Beauty',
      name2: 'Products',
      icon: 'icons8-lipstick-100 1.svg',
      dis: `High-quality cosmetics 
      handpicked for your 
      beauty needs.`,
    },
    {
      name: 'Wig',
      name2: 'installation',
      icon: `icons8-woman's-hair-100 (1) 1.svg`,
      dis: `Expertly fitted wigs for a 
      seamless, natural appearance.`,
    },
    {
      name: 'Eyebrow',
      name2: 'microblading ',
      icon: 'icons8-eyebrow-100 1.svg',
      dis: `Achieve fuller, natural-looking 
      eyebrows with semi-permanent 
      precision.`,
    },
  ];
  testimonials: any = [
    {
      dis: `Samantha's event makeup 
      made me feel stunning and 
      confident – highly 
      recommended!`,
      name: `Miss Farah`,
    },
    {
      dis: `Game-changing makeup 
      lessons, Samantha's 
      personalized approach 
      boosted my confidence.`,
      name: `Mellisah`,
    },
    {
      dis: `Exceeded expectations 
      with microblading; my 
      brows look full 
      and natural!`,
      name: `EMMA`,
    },
  ];

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      this.activeMenu = false;
    });
    // this.setLang(localStorage.getItem('lang') || 'en');
  }
}
