import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { generators } from "./generators/generator"
import Generator, { type CreditsText } from "./generators/generator-base"
import { Button } from "./components/ui/button"
import { useState } from "react"

const App = () => {
  const [selectedGenerator, setSelectedGenerator] = useState<Generator | null>(
    null
  )
  const [generatedText, setGeneratedText] = useState<
    { text: string; credits?: CreditsText }[]
  >([])

  const generate = async () => {
    if (!selectedGenerator) return

    const text = await selectedGenerator.generate()

    setGeneratedText((prev) => [
      ...prev,
      {
        text,
        credits: selectedGenerator.credits,
      },
    ])
  }

  return (
    <div className="flex h-svh flex-col gap-4 p-4">
      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {generatedText.map((item, index) => (
          <div key={index}>
            {item.text.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}

            {item.credits && (
              <p className="text-xs text-muted-foreground">
                <a
                  href={item.credits.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.credits.text}
                </a>

                {item.credits.license && (
                  <>
                    {" - "}
                    <a href={item.credits.license}>(license)</a>
                  </>
                )}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex w-min gap-4 border border-input p-2 text-xs">
        <Select
          onValueChange={(value) => {
            const generator = generators.find((g) => g.name === value)
            setSelectedGenerator(generator || null)
          }}
        >
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Type" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {generators.map((generator) => (
                <SelectItem key={generator.name} value={generator.name}>
                  {generator.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button onClick={generate}>Generate</Button>
      </div>
    </div>
  )
}

export default App
