import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nobis culpa cumque quis eos rem, ad eveniet, iure nostrum voluptatum laboriosam, voluptates porro delectus dolorem quasi sunt dolor ratione quae.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
