import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur
        odit sequi corporis dolor? Maiores error, eos at similique officia animi
        voluptatibus incidunt voluptas pariatur ipsam quas nostrum iure
        dignissimos.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur
        odit sequi corporis dolor? Maiores error, eos at similique officia animi
        voluptatibus incidunt voluptas pariatur ipsam quas nostrum iure
        dignissimos.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur
        odit sequi corporis dolor? Maiores error, eos at similique officia animi
        voluptatibus incidunt voluptas pariatur ipsam quas nostrum iure
        dignissimos.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur
        odit sequi corporis dolor? Maiores error, eos at similique officia animi
        voluptatibus incidunt voluptas pariatur ipsam quas nostrum iure
        dignissimos.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur
        odit sequi corporis dolor? Maiores error, eos at similique officia animi
        voluptatibus incidunt voluptas pariatur ipsam quas nostrum iure
        dignissimos.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur
        odit sequi corporis dolor? Maiores error, eos at similique officia animi
        voluptatibus incidunt voluptas pariatur ipsam quas nostrum iure
        dignissimos.
      </p>
      <GoTop {...args} />
    </div>
  );
};
