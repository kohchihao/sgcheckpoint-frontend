import React from 'react';
import { testHook, act, cleanup, render, wait, fireEvent } from 'react-testing-library';
import { useFetch } from '../hooks';
import config from '../config.json';
import nock from 'nock';
import Footer from '../Footer';
import 'jest-dom/extend-expect'

afterEach(cleanup);

describe('useFetch', () => {
  it('should have a function', () => {
    expect(useFetch).toBeDefined();
  });

  it('should fetch the correct data', async () => {
    let data, loading, error;

    const scope = nock(config.uri)
      .get('/rates')
      .reply(
        200,
        {
          amount: 1,
          base: 'SGD',
          date: '2019-02-12',
          rates: {
            MYR: 3.00313123
          }
        },
        {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json'
        }
      );

    testHook(() => {
      return ([data, loading, error] = useFetch(config.uri + '/rates'));
    });

    await wait(() => {
      expect(loading).toBe(false);
      expect(error).toBe('');
      expect(data.base).toBe('SGD');
    });
  });
});

describe('Footer component', () => {

  it('should have "CRAFTED BY ..."', () => {
    const { getByText, getByTestId, container } = render(
      <Footer
        name={'MARCUS KOH CHI HAO'}
        facebook={'https://www.facebook.com/singaporecheckpoint/'}
        instagram={'https://instagram.com/cheezyhao95/'}
      />
    );
    expect(getByText('CRAFTED BY MARCUS KOH CHI HAO').textContent).toBe('CRAFTED BY MARCUS KOH CHI HAO')
    
  });
});
