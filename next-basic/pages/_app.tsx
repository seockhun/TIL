import {AppProps} from "next/app";
import {NextPage } from "next";
import Wrapper from "../store";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
};

export default Wrapper.withRedux(MyApp);