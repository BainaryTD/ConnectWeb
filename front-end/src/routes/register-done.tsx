import { createFileRoute } from '@tanstack/react-router'
import RegisterDone from '../pages/RegisterDone'

export const Route = createFileRoute('/register-done')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <RegisterDone />
    </>
  )
}
