import {Component, HostBinding, OnInit} from '@angular/core';
import {trigger,style,animate,transition,state,animation,keyframes} from "@angular/animations";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  animations:[
  ]
})
export class WelcomePageComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
  }
  left = {
    width: '400px',
    height: '400px',
    justifyContent: 'center',
    marginLeft: '20em',
    borderRadius: '30px',
  }

  right = {
    width: '400px',
    height: '400px',
    justifyContent: 'center',
    marginLeft:'90em',
    borderRadius: '30px'
  };

  colors:string [] = [
    '#F2F7FF',
    '#FDF785',
    '#B2C9FF'
      ]

  presentationText: string[] = [
    `Découvrez la meilleure application de dressing connecté : Emportez votre garde-robe partout dans le monde avec Vestidor !
    Que vous soyez en voyage, chez des amis ou simplement en déplacement, vous aurez toujours accès à votre collection de vêtements préférés.
    Partagez vos vêtements avec vos amies pour des conseils de style instantanés et échangez des tenues pour des occasions spéciales.`,
    `Avec Vestidor, créez votre look parfait en un clin d'œil !
    Parcourez votre garde-robe virtuelle, créez des tenues et essayez-les virtuellement pour voir comment elles vous vont.
    Vous pouvez même organiser votre tenue du jour (OOTD) pour vous assurer d'être toujours à la pointe de la mode.`,
    `Mais ce n'est pas tout ! Restez informé des nouvelles tendances de la mode grâce aux notifications de Vestidor.
    Soyez le premier à connaître les dernières tendances, les promotions exclusives et les événements spéciaux.`
  ];

  scrollDown(index: number) {
    const targetElement = document.getElementsByClassName('container')[index + 2];
    while (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollDownUnique() {
    window.scrollTo({
      top:window.innerHeight,
      behavior:'smooth'
    })};
}
