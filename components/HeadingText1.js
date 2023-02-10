export default function HeadingText1({children, customStyle}) {
  return (
    <h1 className={`${customStyle} ${'font-fira font-extrabold text-slate-50 mb-4 2xsm:text-2xl xsm:text-3xl md:text-4xl'}`}>
      {children}
    </h1>
  )
}