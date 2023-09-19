import { env } from '@/env.mjs'

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export const unslugify = (str: string) => {
  return str.replace(/-/g, ' ')
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export const formatBytes = (
  bytes: number,
  decimals = 0,
  sizeType: 'accurate' | 'normal' = 'normal'
) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const accurateSizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB']
  if (bytes === 0) return '0 Byte'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === 'accurate' ? accurateSizes[i] ?? 'Bytest' : sizes[i] ?? 'Bytes'
  }`
}

export const isArrayOfFile = (files: unknown): files is File[] => {
  const isArray = Array.isArray(files)
  if (!isArray) return false
  return files.every((file) => file instanceof File)
}

export const isObjectEmpty = (objectName: unknown) =>
  objectName &&
  objectName.constructor === Object &&
  Object.keys(objectName).length === 0
