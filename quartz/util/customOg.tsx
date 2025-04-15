import { SatoriOptions } from "satori/wasm"
import { GlobalConfiguration } from "../cfg"
import { QuartzPluginData } from "../plugins/vfile"
import { UserOpts } from "./og"

export const customOgImage = (
  cfg: GlobalConfiguration,
  _userOpts: UserOpts,
  title: string,
  _description: string,
  fonts: SatoriOptions["fonts"],
  _fileData: QuartzPluginData,
) => {
  // How many characters are allowed before switching to smaller font
  const titleFontBreakPoint = 30
  const useSmallerTitleFont = title.length > titleFontBreakPoint

  // Split the title at the last dash for better visual presentation
  const titleParts = title.split('-')
  const hasDash = titleParts.length > 1

  // If there's a dash, separate the last part from the rest
  const titleFirstPart = hasDash ? titleParts.slice(0, -1).join('-') : title
  const titleSecondPart = hasDash ? ` -${titleParts[titleParts.length - 1]}` : ''

  // Set up background image path
  const bgImagePath = `https://${cfg.baseUrl}/static/og-image.jpg`

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${bgImagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "2.5rem",
      }}
    >
      {/* Title at the top */}
      <div
        style={{
          position: "relative",
          maxWidth: "85%",
          marginLeft: "1rem",
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: useSmallerTitleFont ? 30 : 48,
            fontFamily: fonts[0].name,
            fontWeight: "bold",
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            margin: 0,
            padding: 0,
          }}
        >
          {titleFirstPart}
        </h1>
        <h2
          style={{
            color: "white",
            fontSize: useSmallerTitleFont ? 28 : 36,
            fontFamily: fonts[0].name,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            margin: "0 10px 0 0",
            padding: "0",
          }}
        >
          {titleSecondPart}
        </h2>
      </div>

      {/* Small watermark/logo in the bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: fonts[0].name,
            opacity: 0.9,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          jose.co.nz
        </span>
      </div>
    </div>
  )
}
