import React from "react";
import renderer from 'react-test-renderer';
import Seo from "./Seo";

describe('Home', () => {
  it('renders the seo component properly', () => {
    const seo = renderer
    .create(<Seo />)
    .toJSON();

    expect(seo).toMatchSnapshot();
  })
})