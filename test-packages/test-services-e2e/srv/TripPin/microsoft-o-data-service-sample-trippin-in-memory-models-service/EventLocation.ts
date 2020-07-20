/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { City, CityField } from './City';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EventLocation
 */
export interface EventLocation {
  /**
   * Building Info.
   * @nullable
   */
  buildingInfo?: string;
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * City.
   * @nullable
   */
  city?: City;
}

/**
 * @deprecated Since v1.6.0. Use [[EventLocation.build]] instead.
 */
export function createEventLocation(json: any): EventLocation {
  return EventLocation.build(json);
}

/**
 * EventLocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EventLocationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EventLocation.buildingInfo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  buildingInfo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BuildingInfo', this, 'Edm.String');
  /**
   * Representation of the [[EventLocation.address]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Address', this, 'Edm.String');
  /**
   * Representation of the [[EventLocation.city]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: CityField<EntityT> = new CityField('City', this);
}

export namespace EventLocation {
  export function build(json: { [keys: string]: FieldType | City }): EventLocation {
    return createComplexType(json, {
      BuildingInfo: (buildingInfo: string) => ({ buildingInfo: edmToTs(buildingInfo, 'Edm.String') }),
      Address: (address: string) => ({ address: edmToTs(address, 'Edm.String') }),
      City: (city: City) => ({ city: City.build(city) })
    });
  }
}