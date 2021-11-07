import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AppLayout } from "../components/layout/appLayout";
import { RouterDecorator } from "../../.storybook/decorators/routerDecorator";
import { Content } from "../components/layout/content";

export default {
  title: "Layout/App layout",
  component: AppLayout,
  decorators: [RouterDecorator],
} as ComponentMeta<typeof AppLayout>;

const Template: ComponentStory<typeof AppLayout> = () => (
  <AppLayout>
    <Content h="300px">Content goes here...</Content>
  </AppLayout>
);

export const Primary = Template.bind({});
