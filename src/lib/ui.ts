// Composiciones de utilidades compartidas. Tailwind detecta estas clases al compilar.
export const wrap = 'mx-auto w-[calc(100%_-_40px)] sm:w-[calc(100%_-_48px)] md:w-[calc(100%_-_72px)] lg:w-[min(1240px,calc(100%_-_112px))]';
export const mono = 'font-mono text-xs font-normal tracking-[.06em]';
export const eyebrow = 'font-mono text-[11px] leading-[1.7] font-normal tracking-[.06em] sm:text-xs';
export const syntax = 'font-mono font-normal text-code-type tracking-[-.04em]';
export const sectionSpace = 'py-[63px] sm:py-[75px] md:py-[100px]';
export const heading = 'mt-[17px] text-[clamp(27px,6.4vw,36px)] leading-[1.25] tracking-[-.04em] sm:mt-5 sm:text-[30px] md:text-[clamp(30px,3.2vw,44px)]';
export const button = 'inline-flex min-h-[49px] items-center justify-center gap-5 rounded-[3px] bg-accent px-5 py-[13px] text-xs font-medium text-on-accent transition-[background,translate] hover:-translate-y-0.5 hover:bg-accent-hover';
export const textLink = 'inline-flex min-h-11 items-center gap-3.5 text-sm text-accent-ink hover:underline hover:underline-offset-5';
export const statusDot = 'inline-block size-1.5 shrink-0 rounded-full bg-accent-ink';
