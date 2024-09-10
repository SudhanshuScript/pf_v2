import { Sora } from "next/font/google";
import { useRouter } from "next/router";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// ** components
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout = ({ children }: any) => {
  const { pathname } = useRouter();

  const hiddenOverflowRoutes = [
    "/archive",
    "/services/webdevelopment",
    "/services/systemArchitecture",
  ];

  const shouldHideOverflow = hiddenOverflowRoutes.includes(pathname);
  console.log("Check shouldHideOverflow", shouldHideOverflow);

  return (
    <div
      className={`page bg-site text-white bg-cover overflow-y-auto xl:${
        shouldHideOverflow ? "overflow-y-auto" : "overflow-hidden"
      } bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      <div className="xl:py-0">{children}</div>
    </div>
  );
};

export default Layout;
