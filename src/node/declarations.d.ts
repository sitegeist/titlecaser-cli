declare module '@danielhaim/titlecaser/dist/titlecaser.module.js' {
  export class TitleCaser {
    constructor(options: { style: string });
    toTitleCase(input: string): string;
  }
}
