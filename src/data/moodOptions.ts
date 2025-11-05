import type { MoodOption } from "../types/moodOption";

const moodOptions: MoodOption[] = [
  { id: 1, label: "Feliz", icon: "bi bi-emoji-grin", color: "#20DF66" },
  {
    id: 2,
    label: "Motivado",
    icon: "bi bi-emoji-sunglasses",
    color: "#875AF2",
  },
  { id: 3, label: "Calmo", icon: "bi bi-brightness-high", color: "#5AA6F2" },
  {
    id: 4,
    label: "Ansioso",
    icon: "bi bi-emoji-astonished",
    color: "#FF6F00",
  },
  {
    id: 5,
    label: "Neutro",
    icon: "bi bi-emoji-neutral-fill",
    color: "#9E9E9E",
  },
  { id: 6, label: "Cansado", icon: "bi bi-battery-low", color: "#FBD051" },
  { id: 7, label: "Estressado", icon: "bi bi-emoji-angry", color: "#F08A42" },
  { id: 8, label: "Triste", icon: "bi bi-emoji-tear", color: "#EF4343" },
];

export default moodOptions;
