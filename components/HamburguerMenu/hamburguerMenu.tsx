import { FC, useState } from 'react'
import { Content, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import useScreenBreakpoint from 'hooks/useScreenBreakpoint'

const HamburguerMenu: FC = () => {
  const [isActive, setActive] = useState(false)

  const { isSmall } = useScreenBreakpoint()
  console.log(isSmall)

  return (
    <Root open={isActive} onOpenChange={(open) => setActive(open)}>
      <Trigger asChild>
        <button className="flex flex-col items-center justify-center gap-2 w-11 h-8">
          <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-full h-full"></div>
          <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-2/3 h-full"></div>
          <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-full h-full"></div>
        </button>
      </Trigger>
      <Content className="flex w-24 h-24 bg-slate-300"></Content>
    </Root>
  )
}
export default HamburguerMenu
