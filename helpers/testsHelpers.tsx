import { render } from '@testing-library/react';

// export const shallowRender = (component, store) => {
//   const core = store ? (
//     <MemoryRouter>
//       <ThemeProvider theme={theme}>
//         <Provider store={store}>{component}</Provider>
//       </ThemeProvider>
//     </MemoryRouter>
//   ) : (
//     component
//   );
//   return render(core);
// };

export const shallowRender = (component: JSX.Element) => render(component);
