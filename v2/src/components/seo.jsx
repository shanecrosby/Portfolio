import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />

        <script type="application/ld+json">
            {`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "https://www.shanecrosby.com",
                    "name": "Shane Crosby - Web Designer",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+61-407-472-944",
                        "contactType": "Primary Contact"
                    }
                }
            `}
        </script>
        {children}
        </>
    )
}