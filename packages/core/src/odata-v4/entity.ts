import { Entity as EntityBase, Constructable } from '../odata-common';
import { CustomField } from './selectable';

/**
 * Super class for all representations of OData v4 entity types.
 */
export abstract class Entity extends EntityBase {
  protected static customFieldSelector<
    EntityT extends Entity,
    NullableT extends boolean = false
  >(
    fieldName: string,
    entityConstructor: Constructable<EntityT>,
    isNullable: NullableT = false as NullableT
  ): CustomField<EntityT, NullableT> {
    return new CustomField(fieldName, entityConstructor, isNullable);
  }

  readonly _oDataVersion: 'v4' = 'v4';
}

export { Entity as EntityV4 };