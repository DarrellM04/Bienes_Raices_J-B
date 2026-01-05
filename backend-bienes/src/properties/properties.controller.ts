import { Controller, Get } from '@nestjs/common';

@Controller('properties')
export class PropertiesController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        title: 'Casa en Escazu',
        price: 250000,
        location: 'Escazu'
      },
      {
        id: 2,
        title: 'Terreno en Heredia',
        price: 120000,
        location: 'Heredia'
     }
    ];
  }
}
