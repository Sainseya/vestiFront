import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  animations: [
  ]
})
export class WelcomePageComponent implements OnInit {

  colors: string[] = [
    '#e5c6c6',
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
  /*Scroll vers le haut ou le bas en cliquant sur la sur la fleche  */
  scrollDown(): void {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**La fonction handleScroll est un gestionnaire d'événement utilisé pour détecter et gérer les événements de défilement de la souris (WheelEvent).
   * Elle prend deux paramètres en entrée : l'événement de défilement (event) et
   * l'identifiant (containerId) du conteneur sur lequel le défilement doit être appliqué
   * */
  handleScroll(event: WheelEvent, containerId: string): void {
    event.preventDefault(); //Empêche le scroll par défaut.
    const container = document.getElementById(containerId);

    if (event.deltaY < 0) {
      this.scrollToTop();
    } else {
      this.scrollDown();
    }
  }

  ngOnInit(): void {
  }
}
