import Image from "next/image";

export default function Links() {
  return (
    <main className="flex flex-col min-h-screen p-12 items-center">
      <div className="flex flex-col items-center flex-1 justify-between">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full bg-cover shadow-lg border-2 border-gray-200"
            alt="Profile Image"
            src={"/everton.png"}
            width={200}
            height={200}
          />
          <h3 className="mt-8 leading-relaxed font-light text-xl">
            Everton Fernandes
          </h3>
        </div>

        <div id="links" className="w-full space-y-2">
          <div className="w-full flex">
            <a
              href="https://github.com/evertonbzr"
              target="_blank"
              className="w-full transition-all hover:bg-gray-200 hover:text-slate-800 font-medium p-4 border border-gray-200 text-gray-200 flex justify-center items-center"
            >
              Github
            </a>
          </div>
          <div className="w-full flex">
            <a
              href="https://www.linkedin.com/in/evertonfrnds/"
              target="_blank"
              className="w-full transition-all hover:bg-gray-200 hover:text-slate-800 font-medium p-4 border border-gray-200 text-gray-200 flex justify-center items-center"
            >
              Linkedin
            </a>
          </div>
          <div className="w-full flex">
            <a
              href="https://www.instagram.com/evertonfernandesbz/"
              target="_blank"
              className="w-full transition-all hover:bg-gray-200 hover:text-slate-800 font-medium p-4 border border-gray-200 text-gray-200 flex justify-center items-center"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center text-gray-200">
          Code like the wind, create like a master, <br />
          program like a wizard.
        </div>
      </div>
    </main>
  );
}
