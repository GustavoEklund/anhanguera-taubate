import { useEffect, useState, useCallback } from 'react'

type Props = {
  windowHeight: number
  windowWidth: number
}

export default function useWindowSize(): Props {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [windowHeight, setWindowHeight] = useState<number>(0)
  const handleResize = useCallback((): void => {
    setWindowHeight(global?.window?.innerHeight || 0)
    setWindowWidth(global?.window?.innerWidth || 0)
  }, [])
  useEffect(() => {
    global?.window?.addEventListener('resize', handleResize)
    handleResize()
    return () => global?.window?.removeEventListener('resize', handleResize)
  }, [handleResize])
  return { windowHeight, windowWidth }
}
