import { Cache, TextureLoader, Scene, Material, Object3D, Mesh } from 'three'
import { DRACOLoader, GLTFLoader } from 'three-stdlib'

Cache.enabled = true

const dracoLoader = new DRACOLoader()
const gltfLoader = new GLTFLoader()
dracoLoader.setDecoderPath('/draco/')
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * GLTF model loader configured with draco decoder
 */
export const modelLoader = gltfLoader
export const textureLoader = new TextureLoader()

/**
 * Clean up a scene's materials and geometry
 */
export const cleanScene = (scene: Scene) => {
  scene?.traverse((object: Object3D) => {
    if (!(object instanceof Mesh)) return

    object.geometry.dispose()

    if (object.material instanceof Material) {
      cleanMaterial(object.material)
    } else {
      for (const material of object.material) {
        cleanMaterial(material)
      }
    }
  })
}

/**
 * Clean up and dispose of a material
 */
export const cleanMaterial = (material: Material) => {
  material.dispose()

  // Clean up specific properties if they exist
  if ('minFilter' in material) {
    (material as any).dispose()
    (material as any).source?.data?.close?.()
  }
}

/**
 * Clean up and dispose of a renderer
 */
export const cleanRenderer = (renderer: any) => {
  renderer.dispose()
  renderer = null
}

/**
 * Clean up lights by removing them from their parent
 */
export const removeLights = (lights: any[]) => {
  for (const light of lights) {
    light.parent.remove(light)
  }
}

/**
 * Get child by name
 */
export const getChild = (name: string, object: Object3D): Object3D | undefined => {
  let node: Object3D | undefined = undefined

  object.traverse((child: Object3D) => {
    if (child.name === name) {
      node = child
    }
  })

  return node
}
