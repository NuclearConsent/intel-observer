import {
  component$,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import IntelImage from '~/media/threat-intel.png?jsx';


export default component$(() => {
  useStylesScoped$(`
  .layout {
    background-image: 
      radial-gradient(hsla(0, 0%, 80%, 0.2) 3px, transparent 0),
      radial-gradient(hsla(0, 100%, 60%, 0.2) 2px, transparent 0);
    background-size: 50px 50px;
    background-position:
      0 0,
      25px 25px;
    -webkit-animation: slide 1s linear infinite;
    animation: slide 4s linear infinite;
  }

  @keyframes slide {
    100% {
      background-position:
        50px 0,
        125px 25px;
    }
  }

  .cards:hover > .card::after {
    opacity: 1;
  }

  .card::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  .card::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }
  `);

  return (
    <main class="layout grid min-h-screen w-full place-items-center bg-[#141414] bg-fixed text-white selection:bg-zinc-300 selection:text-black">
      <section class="p-5 h-screen">
        {/*<IntelImage class="h-auto max-w-full mx-auto object-scale-down" />*/}
          <IntelImage class="object-scale-down max-h-full m-auto p-6" />
        <div class="grid items-center gap-6">
          <div class="flex flex-col justify-center space-y-4 text-center">
            <div class="mb-6 space-y-2">
              <h1 class="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl">
                Intel Observer
              </h1>
              <p class="mx-auto max-w-3xl text-sm text-zinc-200 sm:text-base md:text-xl">
              Threat Intelligence Search Engine & News Aggregator
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="absolute inset-x-0 bottom-4 flex justify-center">
        <em class="text-zinc-500">
          &copy; {new Date().getFullYear()}{" "} Intel Observer
        </em>
      </footer>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Intel Observer",
  meta: [
    {
      name: "Intel Observer",
      content:
        "Threat Intelligence Search Engine & News Aggregator",
    },
  ],
};
