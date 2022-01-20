import webImage from './falseWeb.jpeg';
import HomePageStyle from './style';

export default function HomePage() {
  return (
    <HomePageStyle>
      <div className="homePageContent">
        <img src={webImage} alt="site" />
      </div>
    </HomePageStyle>
  );
}
