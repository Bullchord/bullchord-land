import eco from "../../assets/Ecosystem.svg";
// import locked from "../../assets/twenty.svg";
import marketing from "../../assets/marketing.svg";
import treasury from "../../assets/treasury.svg";
import team from "../../assets/team.svg";
import pubsale from "../../assets/pubsale.svg";
import seed from "../../assets/seed.svg";
export const distribution = [
  { supply: "51% for Community incentive", img: eco },
  {
    supply:
      "10% for Team (locked for 2 years, and harvestable in 52 weeks after the initial 2 years)",
    img: team,
  },
  {
    supply: "14% for Treasury (vested linearly 2 years, harvestable weekly)",
    img: treasury,
  },
  { supply: "13% for Marketing", img: marketing },
  {
    supply: "10% for Public Sale (70% liquidity, 30% development)",
    img: pubsale,
  },
  { supply: "2% for Seed", img: seed },
];
