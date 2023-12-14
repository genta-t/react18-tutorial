import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

/**
 * コンポーネントの円です
 */
const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Example/Circle",
  argTypes : {
    variant : {
      control: { type: "color" },
    }
  },
  tags: ["autodocs"]
}

export default meta;

type TypeStory = StoryObj<typeof meta>;

/**
 * オレンジ色の円です
 */
export const BaseCircle: TypeStory = {
  args: {
    variant: "orange",
  },
};
/**
 * 緑色の円です
 */
export const GreenCircle: TypeStory = {
  args: {
    variant: "green",
  },
};
/**
 * 黄色の円です
 */
export const YellowCircle: TypeStory = {
  args: {
    variant: "yellow",
  },
};

export const GroupedCircle: TypeStory = {
  render: () => (
    <div>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  )
}