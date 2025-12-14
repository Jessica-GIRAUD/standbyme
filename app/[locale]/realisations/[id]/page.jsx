import SingleProject from "@/components/SingleProject";
import { portfolios } from "@/data/portfolio";

export async function generateMetadata({ params }) {
  const item = portfolios.find((elm) => elm.id == params.id);

  const title = `${item.client} – ${item.salon} ${item.date}`;

  return {
    title: `${title} | Stand By Me`,
    description:
      "Stand By Me, standiste sur Paris, conçoit et réalise des stands sur mesure pour vos événements en France et à l’international. Design épuré, créativité, savoir-faire : faites rayonner votre marque avec un stand à votre image.",
  };
}

export default function Page() {
  return <SingleProject />;
}
