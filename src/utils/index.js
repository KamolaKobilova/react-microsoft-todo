import {STYLING_CONFIGS} from '../assets 5.22.30 PM/constants';

function pxToRem(size){
    if(typeof size === "number")
   return  `${Number(size / STYLING_CONFIGS.ROOT_SIZE)}rem`
}
  throw new Error('size is not a number')

export {pxToRem} 