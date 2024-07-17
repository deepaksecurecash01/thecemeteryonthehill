export default function Tooltip({ message, children, vertical }) {
  return (
    <div class="group relative flex">
      {children}
      <span
        class={`hidden xl:block absolute  ${
          vertical
            ? " lg:rotate-180 min-h-48 lg:[writing-mode:vertical-rl] top-1/2 -left-6 -translate-y-1/2"
            : "xl:min-w-48 -top-10 left-1/2 "
        }  transform xl:text-center -translate-x-1/2  scale-0 font-roboto transition-all rounded bg-primary p-2 text-xs text-white group-hover:scale-100`}
      >
        {message}
      </span>
    </div>
  );
}
