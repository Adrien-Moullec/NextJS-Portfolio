
const basePath = process.env.NODE_ENV === 'production'
  ? '/NextJS-Portfolio'
  : '';
export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-gradient-to-l to-black from-teal-950 text-teal-300 border-1 border-pink-400">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 border-1 border-pink-400"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          aria-hidden
          src={basePath + "/file.svg"}
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 border-1 border-pink-400"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          aria-hidden
          src={basePath + "/window.svg"}
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 border-1 border-pink-400"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          aria-hidden
          src={basePath + "/globe.svg"}
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  )
}