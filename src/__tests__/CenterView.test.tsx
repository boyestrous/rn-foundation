import React from 'react'
import { StyleProp, Text, View } from 'react-native';
import renderer from 'react-test-renderer';
import {render, cleanup} from '@testing-library/react-native'
import toHaveStyle from "@testing-library/jest-native";
import { CenterView} from '../components/layout/CenterView'
import TextMock from './__mocks__/TextMock';


describe('CenterView',()=>{
    afterEach(cleanup);
    test('renders correctly', () =>{
        const tree = renderer.create(<CenterView><TextMock /></CenterView>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('not Empty - child objects rendering', () =>{
        const tree = render(<CenterView><TextMock /></CenterView>)
        expect(tree.container.findByType(View)).not.toBeEmpty()
    })    

    test('user cannot override justifyContent', ()=>{
        const component = render(<CenterView style={{backgroundColor: 'red', justifyContent: 'flex-end'}}><TextMock /></CenterView>)
        const j = component.container.findByType(View)
        expect(j).toHaveStyle({justifyContent: 'center'})
    })

    test('user cannot override alignItems', ()=>{
        const component = render(<CenterView style={{backgroundColor: 'red', alignItems: 'flex-end'}}><TextMock /></CenterView>)
        const j = component.container.findByType(View)
        expect(j).toHaveStyle({alignItems: 'center'})
    })

    test('user cannot override flex', ()=>{
        const component = render(<CenterView style={{backgroundColor: 'red', flex: 5}}><TextMock /></CenterView>)
        const j = component.container.findByType(View)
        expect(j).toHaveStyle({flex: 1})
    })
   

})
