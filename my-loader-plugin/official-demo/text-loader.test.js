import compiler from './compiler.js'
import 'babel-polyfill'

test('Insert name and output Javascript', async () => {
  const stats = await compiler('./example.txt')
  const output = stats.toJson().modules[0].source
  expect(output).toBe(`export default "hey Oliver!\\r\\n"`)
})