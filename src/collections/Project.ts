import type { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'
import { revalidatePost } from '../hooks/revalidatePost'

export const Project: CollectionConfig = {
  slug: 'project',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'category', 'updatedAt'],
  },
  hooks: {
    afterChange: [revalidatePost],
  },
  versions: {
    maxPerDoc: 5,
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'category',
      required: true,
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    slugField(),
  ],
}