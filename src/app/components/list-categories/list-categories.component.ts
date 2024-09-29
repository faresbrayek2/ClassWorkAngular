import { Component } from '@angular/core';
import { Categorie } from '../../models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  titre: string = '';
  categories: Categorie[] = [
    {
      id: 1,
      title: 'Grand électroménager',
      image: 'assets/images/categorie_electromenager.jpg',
      description:
        'Large household appliances such as refrigerators, washing machines, etc.',
      available: true,
    },
    {
      id: 2,
      title: 'Petit électroménager',
      image: 'assets/images/categorie_petit_electromenager.jpg',
      description:
        'Small household appliances like toasters, coffee makers, etc.',
      available: true,
    },
    {
      id: 3,
      title: 'Produits informatiques',
      image: 'assets/images/categorie_produits_informatiques.jpg',
      description: 'Various computing products such as laptops, monitors, etc.',
      available: true,
    },
    {
      id: 4,
      title: 'Smart Phones',
      image: 'assets/images/categorie_smartPhone.jpg',
      description: 'Smartphones of all brands and models.',
      available: true,
    },
    {
      id: 5,
      title: 'TV, images et son',
      image: 'assets/images/categorie_tv_image_son.jpg',
      description: 'Televisions, speakers, and sound systems.',
      available: true,
    },
    {
      id: 6,
      title: 'Produits voiture',
      image: 'assets/images/produits_nettoyages.jpg',
      description: 'Various car products and cleaning equipment.',
      available: false,
    },
  ];

  showDescription(description: string) {
    alert(description);
  }
}
