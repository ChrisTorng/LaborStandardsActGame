import dynamic from 'next/dynamic'

const DynamicMazeQuizGame = dynamic(() => import('../components/MazeQuizGame'), {
  ssr: false,
})

export default function Page() {
  return (
    <DynamicMazeQuizGame />
  )
}