export default function DescriptionParagraph({children}) {
  return (
    <p className='2xsm:text-base 2xsm:m-2 xsm:text-lg xsm:m-4 sm:text-xl sm:m-4 md:text-2xl md:m-6 lg:text-2xl lg:m-8 text-slate-50 font-fira'>
      {children}
    </p>
  )
}