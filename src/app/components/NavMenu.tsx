// components
import Iconify from "@/components/Iconify";

// libs
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function NavMenu() {
  return (
    <NavigationMenu.Root className="relative flex justify-center">
      <NavigationMenu.List className="center flex list-none">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-2 rounded-lg px-3 py-2 font-medium text-content-300 outline-none hover:bg-surface-200 hover:text-content-100">
            Dashboard{" "}
            <Iconify
              icon={"ph:caret-down-bold"}
              className="relative top-[1px] text-content-200 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0 w-full bg-surface-100 sm:w-auto">
            <ul className="grid list-none gap-x-2 p-5 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <div
                  className="flex h-full w-full
                    select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-fuchsia-500 p-6 no-underline outline-none"
                >
                  <svg
                    aria-hidden
                    width="38"
                    height="38"
                    viewBox="0 0 25 25"
                    fill="surface-100"
                  >
                    <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                    <path d="M12 0H4V8H12V0Z"></path>
                    <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                  </svg>
                  <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-surface-100">
                    Radix Primitives
                  </div>
                  <p className="text-mauve4 text-[14px] leading-[1.3]">
                    Unstyled, accessible components for React.
                  </p>
                </div>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-200">
                    <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
                      title
                    </div>
                    <p className="text-mauve11 leading-[1.4]">child</p>
                  </a>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-2 rounded-lg px-3 py-2 font-medium text-content-300 outline-none hover:bg-surface-200 hover:text-content-100">
            Latihan soal{" "}
            <Iconify
              icon={"ph:caret-down-bold"}
              className="relative top-[1px] text-content-200 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0 w-full bg-surface-100 sm:w-auto">
            <ul className="grid list-none gap-x-2 p-5 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <div
                  className="flex h-full w-full
                    select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-fuchsia-500 p-6 no-underline outline-none"
                >
                  <svg
                    aria-hidden
                    width="38"
                    height="38"
                    viewBox="0 0 25 25"
                    fill="surface-100"
                  >
                    <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                    <path d="M12 0H4V8H12V0Z"></path>
                    <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                  </svg>
                  <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-surface-100">
                    Radix Primitives
                  </div>
                  <p className="text-mauve4 text-[14px] leading-[1.3]">
                    Unstyled, accessible components for React.
                  </p>
                </div>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-200">
                    <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
                      title
                    </div>
                    <p className="text-mauve11 leading-[1.4]">child</p>
                  </a>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-2 rounded-lg px-3 py-2 font-medium text-content-300 outline-none hover:bg-surface-200 hover:text-content-100">
            Leaderboard{" "}
            <Iconify
              icon={"ph:caret-down-bold"}
              className="relative top-[1px] text-content-200 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0 w-full bg-surface-100 sm:w-auto">
            <ul className="grid w-[600px] list-none grid-flow-col grid-rows-3 gap-x-2 p-5">
              <li>
                <NavigationMenu.Link asChild>
                  <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-200">
                    <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
                      title
                    </div>
                    <p className="text-mauve11 leading-[1.4]">child</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-200">
                    <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
                      title
                    </div>
                    <p className="text-mauve11 leading-[1.4]">child</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-200">
                    <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
                      title
                    </div>
                    <p className="text-mauve11 leading-[1.4]">child</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-200">
                    <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
                      title
                    </div>
                    <p className="text-mauve11 leading-[1.4]">child</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-200">
                    <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
                      title
                    </div>
                    <p className="text-mauve11 leading-[1.4]">child</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-200">
                    <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
                      title
                    </div>
                    <p className="text-mauve11 leading-[1.4]">child</p>
                  </a>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-2 rounded-lg px-3 py-2 font-medium text-content-300 outline-none hover:bg-surface-200 hover:text-content-100">
            Bang Catatan{" "}
            <Iconify
              icon={"ph:caret-down-bold"}
              className="relative top-[1px] text-content-200 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0 w-full bg-surface-100 sm:w-auto">
            <ul className="grid list-none gap-x-2 p-5 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <div
                  className="flex h-full w-full
                    select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-fuchsia-500 p-6 no-underline outline-none"
                >
                  <svg
                    aria-hidden
                    width="38"
                    height="38"
                    viewBox="0 0 25 25"
                    fill="surface-100"
                  >
                    <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                    <path d="M12 0H4V8H12V0Z"></path>
                    <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                  </svg>
                  <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-surface-100">
                    Radix Primitives
                  </div>
                  <p className="text-mauve4 text-[14px] leading-[1.3]">
                    Unstyled, accessible components for React.
                  </p>
                </div>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-200">
                    <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
                      title
                    </div>
                    <p className="text-mauve11 leading-[1.4]">child</p>
                  </a>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fade-in data-[state=hidden]:animate-fade-out top-full z-[1] flex h-2 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-2 w-2 rotate-[45deg] rounded-tl-[2px] bg-surface-100 outline outline-1 outline-surface-300" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out relative mt-2 h-[--radix-navigation-menu-viewport-height] w-full origin-[top_center] overflow-hidden rounded-lg bg-surface-100 shadow-lg outline outline-1 outline-surface-300 transition-[width,_height] duration-300 sm:w-[--radix-navigation-menu-viewport-width]" />
      </div>
    </NavigationMenu.Root>
  );
}
