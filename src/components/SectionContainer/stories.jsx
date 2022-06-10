import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          necessitatibus, ipsum nisi earum id reprehenderit sed labore libero ab
          ipsam quasi? Porro facere magni quas explicabo perspiciatis dolore.
          Optio, mollitia?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
