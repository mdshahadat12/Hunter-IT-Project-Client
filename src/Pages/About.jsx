import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const About = () => {
  const {IsDark} = useContext(AuthContext)
  return (
    <div className={`${IsDark?"bg-gray-900 text-white":"bg-orange-300"} mb-32 mt-16 p-10 rounded-lg`}>
      <h1 className="text-2xl text-center font-bold my-10">Who We Are?</h1>

      <p className={`${IsDark?"text-gray-300":"text-gray-700"} mb-12`}>
        Welcome to the Hunter IT, your one-stop destination for all things
        mobile! Whether you are a tech enthusiast, a smartphone shopper, or
        someone who simply loves staying updated with the latest mobile trends,
        this website is your gateway to an exciting world of mobile technology.
        We are here to help you make informed decisions, stay connected, and
        discover the perfect mobile device to suit your needs. <br />
        <br />
        <br />
        Key Features: <br />
        Extensive Mobile Brand Directory: Our website boasts a comprehensive
        directory of all major mobile brands and their product offerings. From
        global giants like Apple, Samsung, and Google to emerging stars in the
        mobile industry, we have got you covered. Find detailed information
        about each brand s history, ethos, and product lineup. <br />
        <br />
        In-Depth Reviews: Whether you are looking to purchase a new smartphone,
        tablet, or wearable device, our expert reviews provide the insights you
        need to make the right choice. We test and evaluate products rigorously,
        assessing everything from performance and camera quality to battery life
        and design. <br />
        <br />
        Latest News and Trends: Stay ahead of the curve with our real-time
        updates on the mobile industry. From breaking news about upcoming device
        releases to analyses of the hottest trends in mobile technology, we keep
        you informed and engaged. <br />
        <br />
        Buyer s Guides: Not sure which mobile device is right for you? Our
        comprehensive buyer s guides offer tailored recommendations for
        different user profiles, helping you navigate the world of mobile brands
        and make an educated decision.
        <br />
        <br />
        Comparative Tools: Compare mobile devices side by side using our
        intuitive tools. Find the perfect device that suits your preferences and
        budget. We offer easy-to-use comparison charts for specifications,
        features, and prices.
        <br />
        <br />
        Accessories and Ecosystem: Dive into the world of mobile accessories,
        from protective cases to wireless chargers. Learn how to create a
        seamless mobile ecosystem by exploring related products, such as
        smartwatches, headphones, and more.
        <br />
        <br />
        Tech Insights and Tutorials: Gain a deeper understanding of mobile
        technology through our informative articles and tutorials. Whether you
        are interested in understanding the latest advancements in mobile
        processors or need help with device setup, we have you covered.
        <br />
        <br />
        Community and User Reviews: Connect with a vibrant community of mobile
        enthusiasts. Share your experiences, ask questions, and read user
        reviews to learn from real-world experiences.
        <br />
        <br />
        Conclusion:
        <br />
        The Mobile Brands Website is your trusted source for everything mobile.
        Whether you are a novice or a seasoned tech aficionado, we are here to
        assist you in navigating the ever-evolving world of mobile technology.
        Stay informed, make smart choices, and connect with a community that
        shares your passion for mobile devices. Join us on this exciting journey
        through the mobile universe!
      </p>
    </div>
  );
};

export default About;
