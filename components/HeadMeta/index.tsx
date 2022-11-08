import { FunctionComponent } from "react";
import Head from "next/head";

interface HeadMetaProps{
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
}

const HeadMeta: FunctionComponent<HeadMetaProps> = (props: HeadMetaProps) => {
    const { title, description, image } = props;

    return(
        <Head>
            <link rel="icon" href="favicon.ico" />

            {/* title */}
            {title ? <title>{title}</title> : null}
            {title ? <meta property="name" content={title} /> : null}
            {title ? <meta property="og:title" content={title} /> : null}
            {title ? <meta property="twitter:title" content={title} /> : null}

            {/* description */}
            {description ? <meta property="description" content={description} /> : null}
            {description ? <meta property="og:description" content={description} /> : null}
            {description ? <meta property="twitter:description" content={description} /> : null}
            
            {/* image */}
            {image ? <meta property="image" content={image} /> : null}
            {image ? <meta property="og:image" content={image} /> : null}
            {image ? <meta property="twitter:image" content={image} /> : null}
            {image ? <meta property="og:image:alt" content={""} /> : null}

            {/* url */}
            <meta property="og:url" content="https://databank.watchdog.team" />

            {/* url */}
            <meta property="og:type" content="website" />
        </Head>
    );
}

export default HeadMeta;