import { useEffect, useRef, useState } from 'react'

let observer: IntersectionObserver
const listeners = new WeakMap()

export const useInView = (options: IntersectionObserverInit = { threshold: 0.01 }) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const callback = listeners.get(entry.target)
            if (callback) {
              callback(entry)
            }
          }
        )
      }, options)
    }

    const node = ref.current
    if (node) {
      const callback = (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
          listeners.delete(entry.target)
        }
      }
      listeners.set(node, callback)
      observer.observe(node)
    }

    return () => {
      if (node) {
        observer.unobserve(node)
        listeners.delete(node)
      }
    }
  }, [options])

  return { ref, isInView }
}