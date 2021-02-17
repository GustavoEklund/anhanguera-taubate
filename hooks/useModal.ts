import { useState } from 'react'

type ModalSate = [isShowing: boolean, toggle: () => void]

export default function useModal(): ModalSate {
  const [isShowing, setIsShowing] = useState<boolean>(false)
  const toggle = (): void => setIsShowing((prevState: boolean): boolean => !prevState)
  return [isShowing, toggle]
}
