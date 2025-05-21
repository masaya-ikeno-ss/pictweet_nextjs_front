'use client'
import Header from './_components/Header';
import Footer from './_components/Footer';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="contents">
        <p>ツイートを表示する場所です</p>
      </div>
      <Footer />
    </div>
  );
}

export default IndexPage;