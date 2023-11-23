import React from "react";
import TitleBank from "../components/TitleBank";
import FeatureItem from "../containers/FeatureItem";
import dialog from "../designs/img/icon-chat_1.webp";
import money from "../designs/img/icon-money_1.webp";
import shield from "../designs/img/icon-security_1.webp";

const Home = () => {
  return (
    <main>
      <div className="hero">
        <TitleBank />
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          imgUrl={dialog}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          imgUrl={money}
          alt="Chat Icon"
          title="More savings means higher rates"
          text=" The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          imgUrl={shield}
          alt="Chat Icon"
          title="Security you can trust"
          text=" We use top of the line encryption to make sure your data and money
            is always safe."
        />
      </section>
    </main>
  );
};

export default Home;
