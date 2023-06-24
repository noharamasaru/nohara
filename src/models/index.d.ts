import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pass?: string | null;
  readonly auMNP?: number | null;
  readonly aucellup?: number | null;
  readonly aushinki?: number | null;
  readonly aukihen?: number | null;
  readonly uqMNP?: number | null;
  readonly uqrikoup?: number | null;
  readonly uqshinki?: number | null;
  readonly uqkihen?: number | null;
  readonly cyura?: number | null;
  readonly yuima?: number | null;
  readonly jigin?: number | null;
  readonly credit?: number | null;
  readonly Chrome?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pass?: string | null;
  readonly auMNP?: number | null;
  readonly aucellup?: number | null;
  readonly aushinki?: number | null;
  readonly aukihen?: number | null;
  readonly uqMNP?: number | null;
  readonly uqrikoup?: number | null;
  readonly uqshinki?: number | null;
  readonly uqkihen?: number | null;
  readonly cyura?: number | null;
  readonly yuima?: number | null;
  readonly jigin?: number | null;
  readonly credit?: number | null;
  readonly Chrome?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home>) => MutableModel<Home> | void): Home;
}