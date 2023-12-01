import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center content-center bg-my-grey md:flex-row">
      <div
        id="landing-image"
        className="md:h-screen bg-my-navy lg:w-7/12 lg:bg-my-navy md:p-12"
      >
        <Image
          src="/images/landing-pic.jpg"
          className="md:rounded-lg"
          width={1024}
          height={1024}
          alt="8 people working on machines"
        />
      </div>

      <div
        id="landing-container"
        className="flex flex-col items-center md:h-screen lg:w-5/12 lg:justify-around"
      >
        <div id="call-to-action">
          <div className="mx-1 mt-8 flex flex-row items-center justify-center">
            <h1 className="rounded-lg bg-my-navy p-4 text-center text-4xl font-bold text-my-mint shadow m-1">
              Wafer Wizards
            </h1>
            <Image
              className="rounded-lg"
              src="/images/logo.png"
              width={72}
              height={72}
              alt="Wafer Wizards Icon"
            ></Image>
          </div>
          <div className="m-8 mx-[5%] box-border rounded-xl bg-my-mint/[0.5] p-4 shadow-my-mint">
            <p>
              If you and your team are like most people, it is hard to keep
              track of what everyone is doing everywhere all at once.
              <br />
              <br />
              If you have asked any of the following, it is probably time to
              consider a better issue management system:
            </p>
            <br />

            <ul className="font-4 ml-4 list-inside list-disc">
              <li>What is in maintenance and why?</li>
              <li>Who is working on the problem?</li>
              <li>When do we expect to return to production?</li>
              <li>What is blocking work?</li>
              <li>Does anyone remember what was last done to this?</li>
            </ul>
            <br />
            <p>
              <span className="text-[24px] font-medium">
                Wafer Wizards can help!
              </span>
            </p>
          </div>
        </div>

        <div className="m-8 flex h-[160px] flex-col place-content-center place-items-center p-8 hover:animate-pulse">
          <Link
            className="m-4 rounded-md bg-my-mint/[0.98] p-4 text-center text-2xl text-my-navy shadow-lg hover:bg-my-navy hover:text-my-mint"
            href="/login"
          >
            Get started by logging in!
          </Link>
          <p id="copyright" className="m-4 text-center">
            © 2023 Connor Skudlarek — Powered by Vercel
          </p>
        </div>
      </div>
    </main>
  );
}
