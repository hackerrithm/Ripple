// Simulate a flaky API around otherwise an otherwise synchronous `f()`.
const flakify = <T>(f: () => T): Promise<T> =>
  new Promise((resolve, reject) =>
    // We'll always take 200 * (1d10 + 1) ms to respond
    window.setTimeout(() => {
      try {

        // And ~20% of the time we'll fail
        if (Math.random() < 0.2) {
          throw new Error('Failed arbitrarily')
        }

        resolve(f())
      }
      catch (e) {
        return reject(e)
      }
    }, 200 + Math.random() * 2000)
  )

type Counter = {
  value: any,
}

export type Api = {
  save(x: Counter): Promise<string>,
  load(): (Promise<Counter>),
}

const __counterValue:string = '__counterValue'

export const api: Api = {
  save: (counter: Counter): Promise<string> => flakify(() => {
    localStorage.setItem(__counterValue, counter.value.toString())
    return '{}'
  }),
  load: (): Promise<Counter> => flakify(() => {
    const storedValue = JSON.parse(localStorage.getItem(__counterValue) || '{}')
    return {
      value: storedValue || '{}',
    }
  }),
}
