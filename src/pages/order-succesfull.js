import Basic from "@layout/basic"
import { TiTick } from 'react-icons/ti'

const OrderSuccesfull = () => {
    return (
        <Basic>
            <div className="h-full w-full flex flex-col items-center justify-center text-green-600">
                <div><TiTick className="text-9xl" /></div>
                Siparişiniz Verildi
            </div>
        </Basic>
    )
}

export default OrderSuccesfull