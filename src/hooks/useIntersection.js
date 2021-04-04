import { useState, useEffect, useRef } from 'react'

const useIntersection = () => {
  const [show, setShow] = useState(false)
  const el = useRef(null)
  const threshold = 0.25

  const handlerIntersection = (entries) => {
    const entry = entries[0]
    const isVisible = entry.intersectionRatio >= threshold
    isVisible ? setShow(true) : setShow(false)
  }

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(handlerIntersection, {
        threshold: threshold,
      })
      observer.observe(el?.current)
    })
  }, [el])

  return [show, el]
}

export default useIntersection
