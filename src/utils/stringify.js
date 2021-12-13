/**
 * 键值对转换成查询字符串
 * @param {object} query 键值对，对象
 * @returns {string} 查询参数字符串
 */
export default function stringify(query) {
  const array = []
  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(query, key)) {
      array.push([key, encodeURIComponent(query[key])].join('='))
    }
  }
  return array.join('&')
}