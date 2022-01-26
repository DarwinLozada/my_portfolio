import * as Dropdown from '@radix-ui/react-dropdown-menu'
import useScreenBreakpoint from 'hooks/useScreenBreakpoint'
import { FC, useState } from 'react'
import NavDialog from './components/Dialog'

export const getHamburguerMenu = () => (
  <button className="flex h-8 w-11 flex-col items-center justify-center gap-2">
    <div className="h-full w-full rounded-md bg-gradient-to-r from-brandPink to-brandViolet"></div>
    <div className="h-full w-2/3 rounded-md bg-gradient-to-r from-brandPink to-brandViolet"></div>
    <div className="h-full w-full rounded-md bg-gradient-to-r from-brandPink to-brandViolet"></div>
  </button>
)

const HamburguerMenu: FC = () => {
  const [isActive, setActive] = useState(false)

  const { isSmall } = useScreenBreakpoint()

  return (
    <>
      <NavDialog active={isActive && isSmall} setActive={setActive} />
      <Dropdown.Root
        open={isActive && !isSmall}
        onOpenChange={(open) => setActive(open)}
      >
        <Dropdown.Trigger asChild>
          {!isSmall && getHamburguerMenu()}
        </Dropdown.Trigger>
        <Dropdown.Content className="flex h-24 w-24 bg-slate-300"></Dropdown.Content>
      </Dropdown.Root>
    </>
  )
}
export default HamburguerMenu
