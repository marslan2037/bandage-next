import { Provider } from "react-redux";
import appStore from "@/app/utils/redux_toolkit/appStore";

export default function CartLayout({children}: any) {
    return (
        <Provider store={appStore}>
            {children}
        </Provider>
    )
}