import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Profile from "../components/profile";
import { getData, getDomain, getTopsites, getScript } from "../lib/data";
import HeaderWidget from "@/components/HeaderWidget"

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const topDomains = await getTopsites();
  const background =
    c.data.background_url !== undefined && c.data.background_url !== null
      ? c.data.background_url
      : "https://cdn.vnoc.com/background/tech4.jpg";
  const description = c.data.description;
  const title = c.data.title;
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const follow_link = "https://www.contrib.com/signup/follow/" + domain;
  const html = await getScript(
    "https://e7lq80c199.execute-api.us-west-2.amazonaws.com/api1?key=5c1bde69a9e783c7edc2e603d8b25023&request=getcontent&url=" +
      domain
  );

  return (
    <>
    <HeaderWidget domain={domain} piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId}  />
     
     <Navigation domain={domain} logo={c.data.logo}/>
    
      <Hero />
      <Profile />
      <Footer
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
}
