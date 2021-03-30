import React from 'react';
import {Recipes} from './Recipes';
import {Cheese} from './Cheese';
import {Pasta} from './Pasta';
import {Sauce} from './Sauce';
import {Loading} from './Loading';

function withSubscription(WrappedComponent) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                isLoading: true,
            }
    
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({isLoading: false})
            }, 5000);
        }c



        
        render() {

            return (
                <>
                {this.state.isLoading ? <Loading/> : <WrappedComponent/> }
                </>
            )
        }



    }
}

const RecipesList = withSubscription(Recipes);
const PastaList = withSubscription(Pasta);
const SauceList = withSubscription(Sauce);
const CheeseList = withSubscription(Cheese);

export {
    RecipesList,
    PastaList,
    SauceList,
    CheeseList,
}