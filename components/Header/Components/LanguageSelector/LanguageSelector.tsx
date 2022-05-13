import * as Dropdown from '@radix-ui/react-dropdown-menu'
import Button from 'components/Button'
import { FC } from 'react'

const LanguageSelector: FC = () => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Button>Language</Button>
      </Dropdown.Trigger>
      <Dropdown.Content className="rounded-md"></Dropdown.Content>
    </Dropdown.Root>
  )
}

export default LanguageSelector
