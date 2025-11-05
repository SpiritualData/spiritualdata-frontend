import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import image from "../assets/images/donate/nj.webp";
import DonationHero from "../components/Donations/DonationHero";
import WhyItMatters from "../components/Donations/WhyItMatters";
import DonationTiers from "../components/Donations/DonationTiers";
import RealStories from "../components/Donations/RealStories";
import WhySupportMatters from "../components/Donations/WhySupportMatters";
import TheInvitation from "../components/Donations/TheInvitation";
import TransparencyTrust from "../components/Donations/TransparencyTrust";
import AfterYouDonate from "../components/Donations/AfterYouDonate";
import ClosingCTA from "../components/Donations/ClosingCTA";
import { useInView } from "../hooks/useInView";

const Donate = () => {
  const header = useInView();
  const hero = useInView();
  const whyItMatters = useInView();
  const donationTiers = useInView();
  const realStories = useInView();
  const whySupportMatters = useInView();
  const theInvitation = useInView();
  const transparencyTrust = useInView();
  const afterYouDonate = useInView();
  const closingCTA = useInView();

  return (
    <Box sx={{ bgcolor: "cosmic.primary" }}>
      {/* Keep the original header image */}
      {/* <Box ref={header.ref}>
        {header.inView && (
          <Box>
            <PageHeader image={image} page={"Donate"} sx={{ mb: 0 }} />
          </Box>
        )}
      </Box> */}

      {/* New Hero Section */}
      <Box ref={hero.ref}>
        {hero.inView && <DonationHero />}
      </Box>

      {/* Why It Matters Section */}
      <Box ref={whyItMatters.ref}>
        {whyItMatters.inView && <WhyItMatters />}
      </Box>

      {/* Donation Tiers Section */}
      <Box ref={donationTiers.ref}>
        {donationTiers.inView && <DonationTiers />}
      </Box>

      {/* Real Stories Section */}
      <Box ref={realStories.ref}>
        {realStories.inView && <RealStories />}
      </Box>

      {/* Why Support Matters Section */}
      <Box ref={whySupportMatters.ref}>
        {whySupportMatters.inView && <WhySupportMatters />}
      </Box>

      {/* The Invitation Section */}
      <Box ref={theInvitation.ref}>
        {theInvitation.inView && <TheInvitation />}
      </Box>

      {/* Transparency & Trust Section */}
      <Box ref={transparencyTrust.ref}>
        {transparencyTrust.inView && <TransparencyTrust />}
      </Box>

      {/* After You Donate Section */}
      <Box ref={afterYouDonate.ref}>
        {afterYouDonate.inView && <AfterYouDonate />}
      </Box>

      {/* Closing CTA Section */}
      <Box ref={closingCTA.ref}>
        {closingCTA.inView && <ClosingCTA />}
      </Box>
    </Box>
  );
};

export default Donate;
