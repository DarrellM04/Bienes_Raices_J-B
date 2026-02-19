import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertiesService {
  private properties = [
    {
      id: 0,
      title: 'Casa en Escazu',
      price: 250000,
      location: 'Escazu',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    },
    {
      id: 1,
      title: 'Casa en Escazu',
      price: 250000,
      location: 'Escazu',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    },
  ];

  findAll() {
    return this.properties;
  }

  findOne(id: number) {
    console.log('ID recibido:', id);
    console.log('Properties:', this.properties);
    return this.properties.find(p => p.id === id);
  }
}
