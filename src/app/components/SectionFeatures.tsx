// libs
import Image from "next/image";

export default function Features() {
  return (
    <section className="flex min-h-screen flex-col items-center px-20 py-20">
      <div className="flex flex-col gap-6 py-10">
        <h1 className="text-center text-5xl font-700 text-content-100">
          The{" "}
          <span className="relative">
            <span
              className="absolute -inset-x-4 -bottom-6 -z-10"
              aria-hidden="true"
            >
              <Image
                src={"/scribble.svg"}
                alt={"scribble highlight"}
                width={180}
                height={48}
                className=""
              />
            </span>
            <span className="relative">only</span>
          </span>{" "}
          UTBK prep you need
        </h1>
        <p className="text-center font-500 text-content-300">
          No other platform offers this many features to help you get into top
          PTNs
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 children:flex children:gap-3 children:rounded-3xl children:p-3 children:shadow-lg">
        <div>
          <div className="flex flex-col justify-between px-4 py-2">
            <p className="text-lg font-700 text-content-200">
              Where can I check the people who want to get into my PTN?
            </p>
            <div className="flex flex-col gap-0.5 children:flex children:gap-2 children:rounded-md children:bg-surface-200/50 children:p-1 children:font-600 children:text-surface-400">
              <div>Ekuda System</div>
            </div>
          </div>
          <div className="flex flex-col justify-end rounded-xl border-4 border-emerald-200 bg-emerald-600 shadow-[inset_0_40px_40px_0_rgba(0,0,0,0.05)] shadow-emerald-400/80">
            <div className="-z-10 -mb-5 h-48 shadow-[inset_0_-32px_40px_0_rgba(0,0,0,0.05)] shadow-emerald-600">
              test
            </div>
            <p className="px-5 pb-5 text-center font-500 text-emerald-50">
              Gain insight on your competition and see where you stand on the
              leaderboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
