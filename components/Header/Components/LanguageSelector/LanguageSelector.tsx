import * as Dropdown from '@radix-ui/react-dropdown-menu'
import Button from 'components/Button'
import { FC, useMemo, useState } from 'react'
import VenezuelaFlag from 'public/images/venezuela.webp'
import UsaFlag from 'public/images/usa.webp'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

const supportedLanguages = [
  {
    text: '¡Buenas!',
    alt: 'Venezuela flag',
    image: VenezuelaFlag,
    language: 'es',
  },
  {
    text: 'Hi!',
    alt: 'Usa flag',
    image: UsaFlag,
    language: 'en',
  },
]

const LanguageSelector: FC = () => {
  const [open, setOpen] = useState(false)
  const { lang } = useTranslation()

  const currentLanguageItem = useMemo(() => {
    const found = supportedLanguages.find(({ language }) => language === lang)
    return found || supportedLanguages[0]
  }, [lang])

  return (
    <Dropdown.Root
      open={open}
    >
      <Dropdown.Trigger asChild>
        <Button
          className="w-[4.5rem] opacity-70 hover:opacity-100 active:opacity-100"
          size="small"
          colorScheme="dark"
          onClick={() => {
            setOpen((state) => !state)
          }}
        >
          <Image src={currentLanguageItem.image} alt={currentLanguageItem.alt} />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content
        className="flex flex-col justify-start gap-4 rounded-lg bg-brandBg p-3 shadow-md"
        sideOffset={10}
      >
        {supportedLanguages.map(({ text, image, alt, language }) => (
          <Dropdown.Item
            className="flex items-center gap-2"
            key={image.src}
            onClick={async () => {
              setOpen((state) => !state)
              await setLanguage(language)
            }}
          >
            <button className="flex items-center justify-center gap-3">
              <figure className="w-10">
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={alt}
                />
              </figure>

              <span className="text-white">{text}</span>
            </button>
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  )
}

export default LanguageSelector
