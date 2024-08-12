import { type SchemaTypeDefinition } from 'sanity'

import top from './schemas/top'
import about from './schemas/about'
import profile from './schemas/profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    top,
    about,
    profile
  ],
}
