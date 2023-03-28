import eco from "../../assets/Ecosystem.svg";
import locked from "../../assets/twenty.svg";
import marketing from "../../assets/marketing.svg";
import treasury from "../../assets/treasury.svg";
import team from "../../assets/team.svg";
import pubsale from "../../assets/pubsale.svg";
import seed from "../../assets/seed.svg";
export const distribution = [
  { supply: "54% for Community incentive", img: eco },
  {
    supply:
      "10% for Team 10% (locked for 2 years, and harvestable 52 weeks and weekly after 2 years)",
    img: team,
  },
  {
    supply:
      "15% for Treasury 15% (vested linearly 2 years, harvestable weekly)",
    img: treasury,
  },
  { supply: "11% for Marketing", img: marketing },
  {
    supply: "8% for Public Sale (70% liquidity, 30% development)",
    img: pubsale,
  },
  { supply: "2% for Seed", img: seed },
];
