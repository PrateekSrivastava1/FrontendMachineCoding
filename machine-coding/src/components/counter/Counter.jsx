import { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className={styles.wrap}>
      <h1 className={styles.title}>Counter</h1>
      <p className={styles.count}>{count}</p>
      <div className={styles.actions}>
        <button type="button" onClick={() => setCount((value) => value - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Increment
        </button>
      </div>
    </section>
  )
}
