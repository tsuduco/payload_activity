import type { CollectionConfig } from 'payload/types'
import { revalidate } from '../utilities/revalidate'

export const Report: CollectionConfig = {
  slug: 'report',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['project', 'progress', 'createdAt'],
  },
  hooks: {
    afterChange: [
      ({ doc, req: { payload } }) => {
        if (doc._status === 'published') {
          revalidate({ payload, collection: 'report', slug: doc.slug })
        }
      
        return doc
      }
    ],
  },
  versions: {
    maxPerDoc: 5,
    drafts: true,
  },
  fields: [
    {
      name: 'project',
      type: 'relationship',
      relationTo: 'project',
      required: true,
    },
    {
      name: 'progress',
      type: 'relationship',
      relationTo: 'progress',
      required: true,
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}