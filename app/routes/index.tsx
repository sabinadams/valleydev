import { Hero } from '~/components/Hero'
import { Technologies } from '~/components/Technologies';
import { Router } from '~/components/Router'
export default function Index() {
  return (
    <div className="h-screen overflow-y-scroll snap-y">
      <Router />
      <div className="h-full w-full snap-start">
        <button className="absolute z-20 top-8 right-8 rounded-2xl bg-emerald-400 px-4 py-2 text-slate-600 font-semibold transform transition duration-300 ease-in-out  hover:bg-emerald-300 hover:-translate-y-1">Sign Up For News</button>
        {/* Hero */}
        <Hero />
      </div>

      {/* Favorite Technologies */}
      <div className="bg-gray-200 px-6 py-4 snap-start" id="test">
        <Technologies />
      </div>

      {/* About */}
      <div className="min-h-screen py-8 px-4 md:px-24 texturedBackground bg-slate-400 snap-start">
        <h2 className="text-center my-8 font-extrabold text-4xl text-white">What Is Valley Dev?</h2>

        <div className="px-10 grid grid-cols-1 md:grid-cols-3 space-y-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="my-8 font-extrabold text-3xl text-slate-600">A place to meet other developers in your community</h2>
            <p className="font-semibold text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti similique vel vitae consectetur ad assumenda commodi, itaque at, animi quam quaerat voluptatum totam. Quia vero obcaecati mollitia a quisquam! Nam!</p>
          </div>
          <div className="flex justify-center items-center col-span-1">Logo</div>
          <div className="flex justify-center items-center col-span-1">Logo</div>
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-right my-8 font-extrabold text-3xl text-slate-600">A resource to help grow and expand your skills</h2>
            <p className="text-right font-semibold text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure nemo tempore, saepe, nam beatae temporibus, eveniet officia pariatur quam laboriosam rem deleniti ipsum assumenda eius quas voluptas architecto perferendis.</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h2 className="my-8 font-extrabold text-3xl text-slate-600">An opportunity to network and get your name out there</h2>
            <p className="font-semibold text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure nemo tempore, saepe, nam beatae temporibus, eveniet officia pariatur quam laboriosam rem deleniti ipsum assumenda eius quas voluptas architecto perferendis.</p>
          </div>
          <div className="flex justify-center items-center col-span-1">Logo</div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-200 h-screen p-4">

      </div>
      {/* Footer */}
    </div>
  );
}
