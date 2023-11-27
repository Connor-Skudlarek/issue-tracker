import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-100 flex flex-col items-center justify-around bg-my-grey md:flex-row">
      <div
        id="landing-image"
        className="bg-my-navy lg:h-screen lg:w-7/12 lg:bg-my-navy"
      >
        <Image
          src="/images/landing-pic.jpg"
          className="max-h-screen px-6 py-2"
          width={1024}
          height={1024}
          alt="8 people working on machines"
        />
      </div>

      <div
        id="landing-container"
        className="flex flex-col items-center lg:h-screen lg:w-5/12 lg:justify-around"
      >
        <div id="call-to-action">
          <div className="mt-8 flex flex-row items-center justify-center">
            <h1 className="mx-[1%] rounded-lg bg-my-navy p-4 text-center text-4xl font-bold text-my-mint shadow">
              Wafer Wizards
            </h1>
            <Image
              className="mx-[1%] rounded-lg"
              src="/images/logo.png"
              width={72}
              height={72}
              alt="Wafer Wizards Icon"
            ></Image>
          </div>
          <p className="font-300 m-8 mx-[10%] box-border rounded-xl bg-my-mint/[0.5] p-4 text-lg shadow-my-mint">
            Having a hard time tracking your projects? Unsure what is in
            maintenance and what is in production? Who is working on the
            problem? When will it be back to normal?<br></br>
            <br></br>We got some magic for that!
          </p>
        </div>

        <div className="box-border flex h-fit flex-col place-content-center place-items-center">
          <Link
            className="m-auto rounded-md bg-my-mint/[0.98] p-4 text-center text-2xl text-my-navy hover:bg-my-navy hover:text-my-mint"
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
