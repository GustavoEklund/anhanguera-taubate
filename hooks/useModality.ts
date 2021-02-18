import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export type Modality = 'presencial' | 'distancia'

interface ModalityReturn {
  modality: Modality
  setModality: (modality: Modality) => void
  handleToggleModality: () => Promise<void>
}

export default function useModality(): ModalityReturn {
  const router = useRouter()
  const [modality, setModality] = useState<Modality>('presencial')

  useEffect(() => {
    setModality(router.query?.modalidade === 'presencial' ? 'presencial' : 'distancia')
  }, [router])

  async function handleToggleModality(): Promise<void> {
    await router.push(
      `${router.pathname}?modalidade=${modality === 'presencial' ? 'distancia' : 'presencial'}`
    )
  }

  return {
    modality,
    setModality,
    handleToggleModality
  }
}
