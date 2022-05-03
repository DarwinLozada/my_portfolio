import * as Dialog from '@radix-ui/react-dialog'
import { FC, useState } from 'react'
import NavDialog from './components/Dialog'

const HamburguerMenu: FC = () => {
  const [isActive, setActive] = useState(false)

  return (
    <Dialog.Root
      open={isActive}
      onOpenChange={(open) => {
        setActive(open)
      }}
    >
      <Dialog.Trigger asChild>
        <button className="flex h-8 w-11 flex-col items-center justify-center gap-2">
          <div className="h-full w-full rounded-md bg-gradient-to-r from-brandPink to-brandViolet"></div>
          <div className="h-full w-2/3 rounded-md bg-gradient-to-r from-brandPink to-brandViolet"></div>
          <div className="h-full w-full rounded-md bg-gradient-to-r from-brandPink to-brandViolet"></div>
        </button>
      </Dialog.Trigger>
      <NavDialog active={isActive} setActive={setActive} />
    </Dialog.Root>
  )
}
export default HamburguerMenu
