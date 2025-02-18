import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// Configuração do meta
const meta = {
  component: Button,
  argTypes: {
    as: {
      control: {
        type: "radio",
        options: ["button", "a"],
      },
      defaultValue: "button",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonExample = {
  args: {
    variant: "primary",
    children: "My Button",
    as: "button",
  },
} satisfies Story;

export const LinkExample = {
  args: {
    variant: "primary",
    children: "My Link Button",
    as: "a",
  },
} satisfies Story;
