import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import CompanyWrapper from "../../Components/CompaniesDisplayComponents/CompanyWrapper";
import CardSection from "../../Components/CardSection/cardSection";
import Stats from "../../Components/StatsComponent/stats";
import GlassCard from "../../Components/HomeComponents/glassCard";
import cryptodata from "../../Data/cryptodata.json";
import ConnectBanner from "../../Components/ConnectBannerComponent/connectBanner";
import TestimonialSection from "../../Components/TestimonialSection/index.js";
import { useHistory } from "react-router";
import * as ROUTES from "../../Constants/routesEndpoints";

function CryptoPage() {
  const classes = useStyles();
  const objectData = cryptodata;
  const history = useHistory();
  return (
    <Box className={classes.root}>
      <HeroSection
        title={objectData.title}
        subtitle={objectData.subtitle}
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
        onButtonClickLeft={() => history.push(ROUTES.FORSTARTUP)}
        onButtonClickRight={() => window.open("https://discord.gg/JPXv2KPPTE", "_self")}
      />
      <CompanyWrapper />
      <CardSection />
      <Stats />
      <GlassCard />
      <TestimonialSection />
      <ConnectBanner />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#222222",
  },
}));

export default CryptoPage;