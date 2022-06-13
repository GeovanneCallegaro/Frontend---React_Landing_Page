import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'GridTwoColumn',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti sapiente quod saepe et aspernatur consequatur doloribus totam, facilis quis!',
    srcImg: 'assets/images/javascript.svg',
    background: false,
  },
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcImg: { type: 'string' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
