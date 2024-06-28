import type { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'

const Categories: CollectionConfig = {
  slug: 'category',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      unique: true,
      index: true,
      required: true,
    },
    slugField(),
  ],
}

export default Categories
