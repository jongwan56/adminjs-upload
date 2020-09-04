import uploadFeature from '@admin-bro/upload'

import { CreateResourceResult } from '../create-resource-result.type'
import { Photo } from '../../../photo/photo.entity'

const createPhotoResource = (): CreateResourceResult<typeof Photo> => ({
  resource: Photo,
  options: {
    listProperties: ['id', 's3Key', 'bucket', 'path'],
  },
  features: [uploadFeature({
    provider: { local: { bucket: 'public' } },
    properties: { file: 'file', key: 's3Key', bucket: 'bucket' },
    validation: { mimeTypes: ['image/png'] },
  })],
})

export default createPhotoResource
