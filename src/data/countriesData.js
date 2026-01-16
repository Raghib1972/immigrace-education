
import australia from "../assets/countries/australia.jpg";
import canada from "../assets/countries/canada.jpg";
import europe from "../assets/countries/europe.jpg";
import uk from "../assets/countries/uk.jpg";

export const countriesData = [
  {
    id: 1,
    name: "Australia",
    description: "Top universities with post-study work options.",
    image: australia,
    position: "object-left-top", // ✅ FIX HERE
  },
  {
    id: 2,
    name: "United Kingdom",
    description: "World-class education and short duration courses.",
    image: uk,
    position: "object-center",
  },
  {
    id: 3,
    name: "Canada",
    description: "Affordable education with PR opportunities.",
    image: canada,
    position: "object-center",
  },
  {
    id: 4,
    name: "Europe",
    description: "Quality education with lower tuition fees.",
    image: europe,
    position: "object-center",
  },
];
