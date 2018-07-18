// import { Button } from '@material-ui/core';
import * as React from 'react';

import CustomButton from './button';

interface DisplayProps {
    clickHandler: (e: any) => void
}

class CustomButtonPanel extends React.Component<DisplayProps, any, any> {

    constructor(props: DisplayProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    public clickHandler = (e:any) => { 
        this.props.clickHandler(e)
    }

    render() {
        return (
            <div>
                <div>
                    <CustomButton name="AC" displayIcon={'AC'} colorValue={"secondary"} clickHandler={this.clickHandler} />
                    <CustomButton name="+/-" displayIcon={'+/-'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="%" displayIcon={'%'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="÷" displayIcon={'÷'} colorValue={"secondary"} clickHandler={this.clickHandler} />
                </div>
                <div>
                    <CustomButton name="7" displayIcon={'7'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="8" displayIcon={'8'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="9" displayIcon={'9'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="x" displayIcon={'x'} colorValue={"secondary"} clickHandler={this.clickHandler} />
                </div> 
                <div>
                    <CustomButton name="4" displayIcon={'4'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="5" displayIcon={'5'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="6" displayIcon={'6'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="-" displayIcon={'-'} colorValue={"secondary"} clickHandler={this.clickHandler} />
                </div>
                <div> 
                    <CustomButton name="1" displayIcon={'1'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="2" displayIcon={'2'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="3" displayIcon={'3'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="+" displayIcon={'+'} colorValue={"secondary"} clickHandler={this.clickHandler} />
                </div> 
                <div> 
                    <CustomButton name="0" displayIcon={'0'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="." displayIcon={'.'} colorValue={"primary"} clickHandler={this.clickHandler} />
                    <CustomButton name="=" displayIcon={'='} colorValue={"secondary"} clickHandler={this.clickHandler} />
                </div>
            </div>
        );
    }

}

export default CustomButtonPanel;