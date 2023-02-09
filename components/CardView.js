export default function CardView({title, desc, link, language, langColor}) {
  let customHeadingStyle;
  if (link !== undefined) {
    customHeadingStyle = "group-hover:underline"
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="group flex flex-col sm:mx-auto md:mx-0 p-6 min-w-lg md:min-h-full rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className={`${customHeadingStyle} ${"mb-2 text-2xl font-bold tracking-tight text-white"}`}>{title}</h5>
        <p className="mb-2 font-normal text-gray-400">{desc}</p>
        <div className="flex flex-row items-center justify-start mt-auto">
          <div className={`${langColor} ${"w-4 h-4 mr-2 rounded-full"}`} />
          <p className="text-base font-normal text-gray-200">{language}</p>
        </div>
      </div>
    </a>
  );
}