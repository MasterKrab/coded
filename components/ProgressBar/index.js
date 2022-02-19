import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Progress from './styles'

const PropressBar = () => {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setProgress(35)

    const handleEnd = () => setProgress(100)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleEnd)
    router.events.on('routeChangeError', handleEnd)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleEnd)
      router.events.off('routeChangeError', handleEnd)
    }
  }, [router])

  useEffect(() => {
    if (progress === 100) {
      const interval = setTimeout(() => setProgress(0), 1000)

      return () => clearTimeout(interval)
    } else if (progress > 0 && progress < 100) {
      const interval = setInterval(() => {
        progress > 50 ? setProgress(progress + 0.25) : setProgress(progress + 1)
      }, 100)

      return () => clearTimeout(interval)
    }
  }, [progress])

  return (
    <Progress
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      progress={parseInt(progress)}
      aria-label="Cargando"
      aria-hidden={progress === 0}
    />
  )
}

export default PropressBar
