import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-100 flex flex-col items-center justify-between overflow-auto bg-my-grey p-0 md:flex-row">
      <div
        id="landing-image"
        className="justify-center bg-my-navy lg:h-screen lg:w-7/12 lg:bg-my-navy"
      >
        <Image
          src="/images/landing-pic.jpg"
          className="max-h-screen justify-center px-6 py-2"
          width={1024}
          height={1024}
          alt="8 people working on machines"
        />
      </div>

      <div
        id="landing-container"
        className="flex h-screen flex-col justify-between lg:w-5/12"
      >
        <div id="call-to-action">
          <h1 className="align-center m-12 m-6 rounded-lg bg-my-navy p-4 text-center text-4xl font-bold text-my-mint shadow">
            Wafer Wizards
          </h1>
          <p className="box font-300 m-8 rounded-xl bg-my-mint/[0.5] p-4 text-lg shadow-my-mint">
            Having a hard time tracking your projects? Unsure what is in
            maintenance and what is in production? Who is working on the
            problem? When will it be back to normal?<br></br>
            <br></br>We got some magic for that!
          </p>
        </div>

        <div id="screenshot" className="flex justify-center object-contain">
          <Image
            src="/images/logo.png"
            width={128}
            height={128}
            alt="Wafer Wizards Icon"
          ></Image>
        </div>

        <Link
          className="md:h-30 w-50 mx-8 mt-4 rounded-md bg-my-mint/[0.98] object-contain p-0 p-4 text-center text-2xl text-my-navy hover:bg-my-navy hover:text-my-mint"
          href="/login"
        >
          Get started by logging in!
        </Link>

        <div id="copyright" className="pb-4 pr-12 text-right">
          © 2023 Connor Skudlarek — Powered by Vercel
        </div>
      </div>
    </main>
  );
}
