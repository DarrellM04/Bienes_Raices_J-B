import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('/api/properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const properties = this.propertiesService.findOne(Number(id));

    if (!properties) {
      throw new NotFoundException('Propiedad no encontrada');
    }

    return properties;
  }
}
