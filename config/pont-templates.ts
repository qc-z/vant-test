/* eslint-disable */

import { CodeGenerator, Interface } from 'pont-engine'
/**
 * @desc 获取请求的URL
 */
export default class MyGenerator extends CodeGenerator {
  constructor(surrounding, outDir = '') {
    super()
    this.surrounding = surrounding
  }
  getInterfaceContent(inter: Interface) {
    let url = inter.path
    let isIdentification = ''
    const identification = '{'
    let paramsArray = []
    if (url.includes(identification)) {
      const result = url.split(identification)[0]
      url = `${result}`
      inter.parameters.forEach((item) => {
        if (item.in !== 'header') {
          paramsArray.push(item.name)
        }
      })
      isIdentification = '+data?.' + paramsArray.join('')
    }
    const paramsCode = inter.getParamsCode()
    const Interfaces = inter.getParamsCode().replace(/class/, 'interface')
    const method = inter.method.toUpperCase()
    const description = inter.description.replace(/(\n|\s)/g, '')
    const contentType =
      inter.consumes && inter.consumes.length ? inter.consumes[0] : 'application/json'

    // 判断参数是否可选
    const isRequired = inter.parameters.some((item) => item.in === 'path' && item.required)
      ? ''
      : '?'

    // 找出tag，赋值对应的host
    let tag = ''
    for (const iterator of this.dataSource.mods) {
      const apis = iterator.interfaces
      if (apis) {
        for (const api of apis) {
          if (api.description.replace(/\n/g, '') === description.replace(/\n/g, '')) {
            tag = iterator.name
          }
        }
      }
    }

    return `


    import request from '@/utils/request';
    import * as defs from '../../baseClass';

    import { useGlobSetting } from '@/utils/useGlobSetting'

    const allConfig: any = useGlobSetting()
    let apiUrl = allConfig.apiUrl
     for (const key in allConfig) {
       if(key === '${tag}') {
        apiUrl = allConfig[key]
       }
    }
    /**
      * @description ${description}
      * @name ${inter.name}
      * @group ${tag}
      */

    ${Interfaces}
    export async function ${inter.name}(data${isRequired}: Params) {
      const options = {
        method: '${method}',
        url: apiUrl + '${url}' ${isIdentification},
        ${isIdentification ? '' : 'data,'}
        name: '${description}',
        headers: {
          'Content-Type': '${contentType}'
        }
      }
      return request(options);
    }
    export const init = ${inter.response.initialValue};
   `
  }
}
