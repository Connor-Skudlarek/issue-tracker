import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-100 flex flex-row items-center justify-between overflow-auto bg-my-grey p-0">
      <div id="landing-image" className="h-screen w-6/12 bg-my-navy">
        <Image
          src="/images/landing-pic.jpg"
          className="max-h-screen w-fit"
          width={1024}
          height={1024}
          alt="A picture of 6 figures working on machines"
        />
      </div>

      <div
        id="landing-container"
        className="flex h-screen w-5/12 flex-col justify-between"
      >
        <div id="call-to-action">
          <h1 className="text-my-navy-blue m-6 p-12 pt-24 text-center text-4xl">
            Wafer Wizards
          </h1>

          <p>
            Have a lot of people working several positions, all on the same
            issue?
          </p>
        </div>

        <div id="screenshot"></div>

        <Link
          className="md:h-30 w-50 m-12 items-center rounded-md bg-my-mint/[0.98] p-4"
          href="/login"
        >
          <div className="mb-2 text-center text-2xl text-my-navy">
            Get started by logging in!
          </div>
        </Link>

        <div id="copyright" className="pb-4 pr-12 text-right">
          © 2023 Connor Skudlarek — Powered by Vercel
        </div>
      </div>
    </main>
  );
}
