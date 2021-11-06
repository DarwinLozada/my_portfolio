import { FC } from 'react'

const HamburguerMenu: FC = () => {
  return (
    <button className="flex flex-col items-center justify-center gap-2 w-12 h-9">
      <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-full h-full"></div>
      <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-2/3 h-full"></div>
      <div className="bg-gradient-to-r from-brandPink rounded-md to-brandViolet w-full h-full"></div>
    </button>
  )
}
export default HamburguerMenu
