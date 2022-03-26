import { Hero } from '~/components/Hero'
import { Technologies } from '~/components/Technologies';
import { Router } from '~/components/Router'
import { scrollToNext } from '~/util/navigation'

export default function Index() {
  return (
    <div className="h-screen overflow-y-scroll snap-y">
      <Router />
      <div className="h-full w-full snap-start" id="home">
        <button onClick={() => scrollToNext('contact')} className="absolute z-20 top-8 right-8 rounded-2xl bg-emerald-400 px-4 py-2 text-slate-600 font-semibold transform transition duration-300 ease-in-out  hover:bg-emerald-300 hover:-translate-y-1">Subscribe</button>
        {/* Hero */}
        <Hero />
      </div>

      {/* Favorite Technologies */}
      <div className="bg-white bg-opacity-40 px-6 py-4 snap-start" id="tech">
        <Technologies />
      </div>

      {/* About */}
      <div className="min-h-screen py-8 px-4 md:px-24 texturedBackground bg-slate-500 snap-start" id="about">
        <h2 className="text-center my-8 font-extrabold text-4xl text-white">What Is Valley Dev?</h2>

        <div className="px-10 grid grid-cols-1 md:grid-cols-3 space-y-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="my-8 font-extrabold text-3xl text-slate-600">A place to meet other developers in your community</h2>
            <p className="font-semibold text-slate-100">The valley has a rich community of developers of all skill levels. Let's get them all together in one place to hang out, network, and share knowledge!</p>
          </div>
          <div className="flex justify-center items-center col-span-1">Logo</div>
          <div className="flex justify-center items-center col-span-1">Logo</div>
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-right my-8 font-extrabold text-3xl text-slate-600">A resource to help grow and expand your skills</h2>
            <p className="text-right font-semibold text-slate-100">Learn from people in your community! There are so many developers from all different backgrounds out there, and their knowledge is valuable!</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h2 className="my-8 font-extrabold text-3xl text-slate-600">An opportunity to network and get your name out there</h2>
            <p className="font-semibold text-slate-100">Meetups like these are perfect places to get in touch with managers of dev teams, people working on exciting projects, and companies who need you on their team!</p>
          </div>
          <div className="flex justify-center items-center col-span-1">Logo</div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-200 h-screen p-4 flex flex-col justify-center items-center gap-y-6" id="contact">
        <p className="font-extrabold text-4xl md:text-5xl text-slate-600">
          Subscribe For Updates
        </p>
        <form className="flex flex-col items-center w-full gap-y-4 md:w-96" action="https://valleydev.us14.list-manage.com/subscribe/post?u=ea72850caeb2f4257ff1cf1e4&amp;id=966edb7daa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
          <input type="email" placeholder="Email address" name="EMAIL" className="w-full rounded-xl px-3 py-2" />
          <input type="text" placeholder="First Name" name="FNAME" className="w-full rounded-xl px-3 py-2" />
          <input type="text" placeholder="Last Name" name="LNAME" className="w-full rounded-xl px-3 py-2" />
          <input type="submit" className="rounded-2xl bg-emerald-400 w-full md:w-1/2 px-4 py-2 text-slate-600 font-semibold transform transition duration-300 ease-in-out cursor-pointer hover:bg-emerald-300 hover:-translate-y-1" value="Subscribe" />
        </form>
      </div>
      {/* Footer */}
    </div>
  );
}
