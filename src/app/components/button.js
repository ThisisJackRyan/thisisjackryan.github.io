import Link from 'next/link';

export default function Button({ children, href }) {
  return (
    <div>
      <Link href={href} >
        <div className='group relative border border-white flex rounded-lg'>
          {/* left stripe */}
          <div className="bg-white w-4 border-r border-white rounded-l-md" /> 
          <div className="relative px-4 py-2 md:px-8 md:py-4">
            <span className="absolute inset-y-0 left-0 w-0 group-hover:w-full group-focus:w-full group-active:w-full rounded-r-md bg-white transition-all duration-300 ease-in-out z-0" />
            <span className="relative z-10 text-white group-hover:text-black group-focus:text-black group-active:text-black transition-colors duration-300">
              {children}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}