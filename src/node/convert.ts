// import { TitleCaser, TitleCaserOptions } from '@danielhaim/titlecaser'
import { TitleCaserOptions } from '@danielhaim/titlecaser'
import pkg from '@danielhaim/titlecaser/dist/titlecaser.module.js';
const { TitleCaser } = pkg

export async function convert(input: string, style: TitleCaserOptions['style'] = 'chicago') {

  if (!input) {
    throw new Error('No input provided')
  }

  try {
    const titleCaser = new TitleCaser({
      style: style
    })

    const result = titleCaser.toTitleCase(input);

    console.log(result)
  } catch (e) {
    throw new Error(e)
  }
}
