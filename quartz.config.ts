import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "José Coelho",
    pageTitleSuffix: " - Software Engineer",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "josecoelho",
    },
    locale: "en-US",
    baseUrl: "jose.co.nz",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "Resources",
      "!(PublicMedia)**/!(*.md)",
      "!(*.md)",
    ],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "JetBrains Mono",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f4f1", // Soft off-white with slight warmth
          lightgray: "#e8e0d8", // Very subtle light tan
          gray: "#b5a99c", // Medium muted brown
          darkgray: "#584c4a", // Muted dark brown
          dark: "#2e2a2d", // Deep muted brown from mountains
          secondary: "#b67d62", // Muted sunset orange
          tertiary: "#c99b7c", // Subtle orange highlight
          highlight: "rgba(182, 125, 98, 0.08)", // Very subtle orange highlight
          textHighlight: "#c99b7c44",
        },
        darkMode: {
          light: "#1d1b22", // Deep night (similar to Tokyo Night, but warmer)
          lightgray: "#2c2730", // Slightly warmer than Tokyo Night dark
          gray: "#57515c", // Muted blue-purple gray
          darkgray: "#c7bdb4", // Muted light tan
          dark: "#e4ddd7", // Soft off-white with warmth
          secondary: "#b38a6c", // Muted golden sunset
          tertiary: "#85636f", // Muted purple-red from sunset/mountains
          highlight: "rgba(179, 138, 108, 0.08)", // Very subtle highlight
          textHighlight: "#b38a6c44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts(), Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
