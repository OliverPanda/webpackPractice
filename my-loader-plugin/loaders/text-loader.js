import { getOptions } from 'loader-utils'
import validateOptions from 'schema-utils'

export default function loader(source) {
  const options = getOptions(this)

  // 将[name] 替换为options.name
  source = source.replace(/\[name\]/g, options.name)

  return `export default ${ JSON.stringify(source) }`
}