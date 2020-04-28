import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs]
};

const options = {
  Pink: "pink",
  Green: "green",
  Yellow: "yellow"
};

export const BoutonLogin = () => ({
  components: { Button },
  template: '<Button color="green" :isDisabled="false">Se connecter</Button>'
});

export const BoutonChoisir = () => ({
  components: { Button },
  template: '<Button color="pink" :isDisabled="false">Choisir</Button>'
});

export const BoutonEnSavoirPlus = () => ({
  components: { Button },
  template: '<Button color="yellow" :isDisabled="false">En savoir plus</Button>'
});

export const BoutonDésactivé = () => ({
  components: { Button },
  template: '<Button color="yellow" :isDisabled="true">En savoir plus</Button>'
});

export const FullButton = () => ({
  components: { Button },
  props: {
    color: {
      // Can be pink, green, yellow
      default: select("Color", options, "pink")
    },
    isDisabled: {
      default: boolean("Disable", false)
    },
    text: {
      default: text("Text", "Se connecter")
    }
  },
  template:
    '<Button :color="color" :isDisabled="isDisabled">{{ text }}</Button>'
});
