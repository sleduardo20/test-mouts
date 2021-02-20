import {GlobalStyles} from '../src/styles/GlobalStyles';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles/>
      <Story />
    </>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds:{
    default: 'bg01',
    values:[
      {
        name:'bg01',
        value: '#DBE2EF',
      }
    ]
  }
}