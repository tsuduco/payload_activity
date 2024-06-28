import type { CollectionConfig } from 'payload/types'

const Progress: CollectionConfig = {
  slug: 'progress',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'status',
      type: 'text',
      unique: true,
      index: true,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}

export default Progress
