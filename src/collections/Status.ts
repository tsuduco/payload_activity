import type { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'

const Status: CollectionConfig = {
  slug: 'status',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['statusId', 'title'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'statusId',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
  ],
}

export default Status
