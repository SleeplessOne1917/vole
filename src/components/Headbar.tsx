import type { VoidComponent } from "solid-js";
import { A } from "solid-start";
import { HiSolidSearch } from "solid-icons/hi";

const Headbar: VoidComponent = () => {
  return (
    <header class="flex justify-between md:grid md:grid-areas-headbar md:grid-cols-5 w-full bg-amber-500 py-3">
      <A href="/" class="ml-4 md:ml-0 grid-in-title text-center">
        <h1>Vole</h1>
      </A>
      <nav class="w-3/5 md:w-full grid-in-actions flex justify-around items-center">
        <A href="/search" class="bg-white rounded-full p-3">
          <HiSolidSearch class="h-5 w-5" />
        </A>
        <A href="/login" class="md:text-lg">
          Login
        </A>
        <A href="/signup" class="md:text-lg">
          Sign Up
        </A>
      </nav>
    </header>
  );
};

export default Headbar;
