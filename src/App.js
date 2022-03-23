import { Counter } from './components/Counter'
import { Friends } from './components/Friends'
import { Items } from './components/Items'

import { mock } from './mock'

const friends = [
  { id: 1, name: 'bob', age: 28 },
  { id: 2, name: 'alice', age: 23, hobby: 'rakugo' },
  { id: 3, name: 'nancy', age: 20 }
]

export const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <div style={{ width: '100%', maxWidth: '756px' }}>
        <Counter />
        <hr />
        <Friends data={friends} />
        <hr />
        <Items contents={mock}>
          <h2>Amazon の商品情報を表示</h2>
          <p>Coolな商品があなたを待ってる！</p>
        </Items>
      </div>
    </div>
  )
}
