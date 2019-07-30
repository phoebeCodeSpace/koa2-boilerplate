import { routerMap } from '../../middleware/router';

const setRouter = method => path => {
  return (target, key, descriptor) => {

    routerMap.push({
      target,
      method,
      path,
      callback: target[key]
    })
    
    return descriptor
  }
}

export const Controller = prefix => (target) => {
  target.prototype.prefix = prefix
}

export const Get = setRouter('get')
export const Post = setRouter('post')
export const Put = setRouter('put')
export const Delete = setRouter('delete')
