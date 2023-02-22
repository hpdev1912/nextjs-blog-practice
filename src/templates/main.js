import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
const Main = ({ meta, children }) => {
  return (
    <div>
      {meta}

      <div className="mx-auto max-w-screen-md">
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
