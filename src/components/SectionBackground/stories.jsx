import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          mollitia sit, soluta veritatis sed, eligendi facere blanditiis
          reiciendis cum inventore obcaecati qui ullam fuga et. Accusantium
          dolorem officiis laborum. Quisquam?
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
      <SectionBackground {...args} />
    </div>
  );
};
