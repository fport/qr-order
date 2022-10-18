import { useRouter } from 'next/router'
import Link from 'next/link'

function ErrorComponent() {
    const router = useRouter()

    return (
        <div className="mt-1 p-4">
            <div className="alert alert-error shadow-lg">
                <div>
                    {/* 
                        TODO: Error: Hydration failed because the initial UI does not match what was rendered on the server.
                    <div className=''>
                        Aradığınız {router?.asPath} bulunamadı
                    </div> */}
                    <Link href="/">
                        <a className="">Go back home</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorComponent
