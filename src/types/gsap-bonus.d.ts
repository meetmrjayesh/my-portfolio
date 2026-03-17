declare module "gsap/SplitText" {
  /** Minimal typings for GSAP SplitText bonus plugin */
  export class SplitText {
    constructor(
      target: string | Element | Array<string | Element>,
      vars?: Record<string, unknown>
    );

    chars: any[];
    words: any[];
    lines: any[];

    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  /** Minimal typings for GSAP ScrollSmoother bonus plugin */
  export class ScrollSmoother {
    static create(vars?: Record<string, unknown>): ScrollSmoother;
    static refresh(safe?: boolean): void;

    scrollTop(value?: number): number;
    scrollTo(target: any, smooth?: boolean, position?: any): void;
    paused(value?: boolean): boolean;
    kill(): void;
  }
}
