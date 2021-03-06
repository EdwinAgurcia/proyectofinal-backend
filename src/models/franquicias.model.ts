import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Franquicias extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Propietario: string;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Franquicias>) {
    super(data);
  }
}

export interface FranquiciasRelations {
  // describe navigational properties here
}

export type FranquiciasWithRelations = Franquicias & FranquiciasRelations;
