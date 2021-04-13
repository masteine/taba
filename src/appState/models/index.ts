import { Models } from '@rematch/core'
import { counter } from '../models/counter';

export interface RootModel extends Models<RootModel> {
  counter: typeof counter
}

export const models: RootModel = { counter }