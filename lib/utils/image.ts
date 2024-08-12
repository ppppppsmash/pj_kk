export async function loadImageFromSrcSet({ src, srcSet, sizes }: { src?: string; srcSet?: string; sizes?: string }): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error('No image src or srcSet provided')
      }

      let tempImage: HTMLImageElement | null = new Image()

      if (src) {
        tempImage.src = src
      }

      if (srcSet) {
        tempImage.srcset = srcSet
      }

      if (sizes) {
        tempImage.sizes = sizes
      }

      const onLoad = () => {
        tempImage.removeEventListener('load', onLoad)
        const source = tempImage.currentSrc
        resolve(source)
      };

      tempImage.addEventListener('load', onLoad)

      // Error handling
      tempImage.addEventListener('error', (event) => {
        tempImage.removeEventListener('load', onLoad)
        reject(`Error loading ${srcSet}: ${event}`)
      });
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`)
    }
  });
}

/**
 * Generates a transparent png of a given width and height
 */
export async function generateImage(width: number = 1, height: number = 1): Promise<string> {
  return new Promise(resolve => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('Canvas 2d context is not supported')
    }

    canvas.width = width
    canvas.height = height

    ctx.fillStyle = 'rgba(0, 0, 0, 0)'
    ctx.fillRect(0, 0, width, height)

    canvas.toBlob(async blob => {
      if (!blob) throw new Error('Video thumbnail failed to load')
      const image = URL.createObjectURL(blob)
      canvas.remove()
      resolve(image)
    })
  })
}

/**
 * Use native html image `srcSet` resolution for non-html images
 */
export async function resolveSrcFromSrcSet({ srcSet, sizes }: { srcSet: string; sizes?: string }): Promise<string> {
  const sources = await Promise.all(
    srcSet.split(', ').map(async srcString => {
      const [src, width] = srcString.split(' ')
      const size = Number(width.replace('w', ''))
      const image = await generateImage(size)
      return { src, image, width }
    })
  )

  const fakeSrcSet = sources.map(({ image, width }) => `${image} ${width}`).join(', ')
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes })

  const output = sources.find(src => src.image === fakeSrc)
  return output!.src
}
