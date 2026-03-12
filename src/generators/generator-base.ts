export type CreditsText =
  | {
      text: string
      url?: string
      license?: string
    }
  | undefined

export default abstract class Generator {
  abstract name: string

  abstract credits: CreditsText

  abstract generate(): string | Promise<string>

  random<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
  }
}
