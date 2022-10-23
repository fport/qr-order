import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config.js'
import ErrorBoundary from '../infrastructure/components/ErrorBoundary'
import '../styles/globals.css'
import { BasketProvider } from '../context/basket'

function ErrorFallback() {
    return <h1>Something went wrong.</h1>
}

function MyApp({ Component, pageProps }) {
    return (
        // Wrap the Component prop with ErrorBoundary component
        <BasketProvider>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Component {...pageProps} />
            </ErrorBoundary>
        </BasketProvider>
    )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
