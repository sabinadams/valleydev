import { Hero } from '~/components/Hero'
import { Technologies } from '~/components/Technologies';
import { Router } from '~/components/Router'
export default function Index() {
  return (
    <div className="h-full">
      <Router />
      <button className="absolute z-20 top-8 right-8 rounded-2xl bg-emerald-400 px-4 py-2 text-slate-600 font-semibold transform transition duration-300 ease-in-out  hover:bg-emerald-300 hover:-translate-y-1">Sign Up For News</button>
      <Hero />

      <div className="bg-gray-200 px-6 py-4" id="test">
        <Technologies />
      </div>

      <div className="bg-slate-400 h-screen p-4">
        <h2 className="text-center my-8 font-extrabold text-4xl text-white">What Is Valley Dev?</h2>

        <div className="grid grid-cols-2">
          <div>1</div>
          <div>2</div>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
}
