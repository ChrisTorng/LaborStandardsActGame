import dynamic from 'next/dynamic'

const DynamicMazeQuizGame = dynamic(() => import('../components/MazeQuizGame'), {
  ssr: false,
})

export default function Page() {
  return (
    <div>
      <h1>勞動基準法迷宮問答遊戲</h1>
      <DynamicMazeQuizGame />
    </div>
  )
}