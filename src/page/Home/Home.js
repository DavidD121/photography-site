import HomePageRow from "../../components/HomePageRow";
import city from "../../images/city.JPG";
import bird from "../../images/bird.JPG";
import dav_nat from "../../images/dav_nat.JPG";
import soccer from "../../images/soccer.JPG";
import './Home.css'

const HomePage = () => {
  return <div className="home-wrapper">
    <HomePageRow image={city} text="City Photography"/>
    <HomePageRow image={dav_nat} text="Weddings and Events" flip={true}/>
    <HomePageRow image={bird} text="Nature and Animals"/>
    <HomePageRow image={soccer} text="Sports" flip={true}/>
  </div>
}

export default HomePage;