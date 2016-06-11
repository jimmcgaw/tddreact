import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import { App } from '../app/app.js';

describe('<App />', () => {

  it('contains the markup we need', () => {
    expect(shallow(<App />).contains(<div className="container">Hello World</div>)).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<App />).is('.container')).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<App />).find('.container').length).to.equal(1);
  });

});
