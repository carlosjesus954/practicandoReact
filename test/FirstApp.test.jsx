import { render } from "@testing-library/react"
import { CarlosWapo } from "../src/FirstApp"


describe('Pruebas en FirstApp ', () => { 
    // test('Debe hacer match con el snapshot', () => { 
    //     const title = ' Hola soy gey '
    //     const { container } = render( <CarlosWapo title={ title }/>)
    //     expect(container).toMatchSnapshot()
    //  })
     test('Debe mostrar el titulo en un h1', () => { 
        const title = 'Hola soy gey'
        const { container, getByText, getByTestId } = render( <CarlosWapo title={ title }/>)
        expect (getByText(title)).toBeTruthy()
        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain(title);
      expect(getByTestId('test-title').innerHTML).toContain(title)

      })
      test('should first', () => { 
        const title = 'Hola soy gey'
        const subTitle = 'queh no hay subtiti'
        const { getByText } = render( 
        <CarlosWapo 
          title={ title }
          subTitle={ subTitle }
        />)
        expect (getByText(subTitle)).toBeTruthy()
       })
 })