import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Seo from '../infrastructure/components/seo'

export default function Multilanguage() {
    const { t } = useTranslation('common')

    return (
        <div>
            <Seo title="Home" />
            <h1>{t('description')}</h1>
            <h3 style={{ minHeight: 70 }}>{t('blog.optimized.question')}</h3>
            <Trans i18nKey="blog.optimized.answer">
                Then you may have a look at
                <a href="https://locize.com/blog/next-i18next/">this blog post</a>.
            </Trans>
        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
})
