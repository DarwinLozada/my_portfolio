import { FC, useState } from 'react'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import * as Dialog from '@radix-ui/react-dialog'
import useScreenBreakpoint from 'hooks/useScreenBreakpoint'

const HamburguerMenu: FC = () => {
  const [isActive, setActive] = useState(false)

  const { isSmall } = useScreenBreakpoint()
  console.log(isSmall)

  return (
    <>
      <Dialog.Root
        open={isActive && isSmall}
        onOpenChange={(open) => {
          setActive(open)
        }}
      >
        <Dialog.Trigger asChild>
          {isSmall && (
            <button className="flex flex-col items-center justify-center gap-2 w-11 h-8">
              <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-full h-full"></div>
              <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-2/3 h-full"></div>
              <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-full h-full"></div>
            </button>
          )}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            forceMount
            className="overflow-y-auto grid place-items-center duration-300 z-50 bg-slate-900/90 fixed top-0 w-screen h-screen"
          >
            <Dialog.Content>
              <div className="flex w-24 h-24 bg-gray-500">Hola</div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
      <Dropdown.Root
        open={isActive && !isSmall}
        onOpenChange={(open) => setActive(open)}
      >
        <Dropdown.Trigger asChild>
          {!isSmall && (
            <button className="flex flex-col items-center justify-center gap-2 w-11 h-8">
              <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-full h-full"></div>
              <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-2/3 h-full"></div>
              <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-full h-full"></div>
            </button>
          )}
        </Dropdown.Trigger>
        <Dropdown.Content className="flex w-24 h-24 bg-slate-300"></Dropdown.Content>
      </Dropdown.Root>
    </>
  )
}
export default HamburguerMenu
