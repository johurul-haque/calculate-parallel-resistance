import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GitHub } from './assets/icons';
import { getEquivalentResistance } from './utils/get-equivalent-resistance';

type Inputs = {
  resistances: string;
};

function App() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [count, setCount] = useState(0);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const result = getEquivalentResistance(data.resistances);
    setCount(result);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 overflow-x-auto">
      <h1 className="leading-tight text-2xl md:text-3xl lg:text-4xl font-bold mx-auto max-w-xs lg:max-w-lg text-center mt-14 lg:mt-28">
        Calculate Equivalent Resistance
      </h1>

      <div className="text-center mt-12 sm:mt-16 mb-10 font-medium">
        <span className="text-6xl sm:text-7xl">{count}</span>
        <sub>&#8486;</sub>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('resistances')}
          className="border-2 focus:border-gray-500 transition-colors rounded-md outline-none w-full min-w-0 mx-auto block max-w-sm px-2.5 sm:px-4 py-1.5 sm:py-3"
          placeholder="Enter values separated by commas"
          required
        />

        <button
          type="submit"
          className="bg-gray-950 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity block mx-auto mt-5 focus-visible:ring ring-gray-700"
        >
          Calculate
        </button>
      </form>

      <a
        href="https://github.com/johurul-haque/calculate-parallel-resistance"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
      >
        <span className="sr-only">View Source code on GitHub</span>
        <GitHub className="w-5 h-5" />
      </a>
    </main>
  );
}

export default App;
