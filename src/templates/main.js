import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
const Main = ({ meta, children }) => {
  return (
    <div>
      {meta}
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
