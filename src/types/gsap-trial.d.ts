declare module "gsap-trial/SplitText" {
  /**
   * Minimal typings for GSAP SplitText (trial build).
   * This is only to satisfy TypeScript during build.
   */
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
