import { concat, partial, curry, isArray} from 'loadsh'

// export const convert => (target, key, descriptor) => {
  
//   target[key] = curry(target[key])
//   target[key] = middleware(target[key])
//   console.log(middleware.arguments)

//   return descriptor
// }

export const Validator = (scene) => {
  return (target, key, descriptor) => {
    console.log(descriptor.value)
    
    return (ctx) => {

    }
    return descriptor
  }
}