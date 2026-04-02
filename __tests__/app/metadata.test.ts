import { siteMetadata } from '../../src/lib/siteMetadata'

describe('Site metadata', () => {
  it('should have the correct metadataBase URL', () => {
    expect(siteMetadata.metadataBase?.toString()).toBe('https://clarasbridge.org/')
  })

  it("should have a title containing Clara's Bridge", () => {
    const title = siteMetadata.title as { default: string; template: string }
    expect(title.default).toContain("Clara's Bridge")
    expect(title.template).toContain("Clara's Bridge")
  })

  it('should have a description mentioning recovery', () => {
    expect(siteMetadata.description).toContain('recovery')
    expect(siteMetadata.description!.length).toBeGreaterThan(50)
  })

  it('should have relevant keywords', () => {
    const keywords = siteMetadata.keywords as string[]
    expect(keywords).toContain('recovery')
    expect(keywords).toContain('mentorship')
    expect(keywords).toContain('nonprofit')
  })

  it('should define OpenGraph fields', () => {
    const og = siteMetadata.openGraph as Record<string, unknown>
    expect(og.type).toBe('website')
    expect(og.siteName).toBe("Clara's Bridge")
    expect(og.url).toBe('https://clarasbridge.org/')
    expect(og.images).toBeDefined()
  })

  it('should define Twitter card fields', () => {
    const twitter = siteMetadata.twitter as Record<string, unknown>
    expect(twitter.card).toBe('summary_large_image')
  })

  it('should allow indexing and following', () => {
    const robots = siteMetadata.robots as Record<string, unknown>
    expect(robots.index).toBe(true)
    expect(robots.follow).toBe(true)
  })

  it('should define icon and manifest paths', () => {
    expect(siteMetadata.manifest).toBeDefined()
    expect(siteMetadata.icons).toBeDefined()
  })
})
