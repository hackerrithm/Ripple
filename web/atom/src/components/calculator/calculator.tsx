import * as React from 'react';

import CustomButtonPanel from './buttonPanel';
import DisplayPanel from './displayPanel';

interface ComponentProps {
    clickHandler: (value: any) => void
}

class Calculator extends React.Component<ComponentProps, any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            total: null,
            next: null,
            operation: null,
        }
    }

    valueSender = (e: any) => {
        this.setState(this.calculate(this.state, e));
    }

    calculate = (obj: any, buttonName: any) => {

        if (buttonName === "AC") {
            return {
                total: null,
                next: null,
                operation: null,
            };
        }

        if (this.isNumber(buttonName)) {
            if (buttonName === "0" && obj.next === "0") {
                return {};
            }
            // If there is an operation, update next
            if (obj.operation) {
                if (obj.next) {
                    return { next: obj.next + buttonName };
                }
                return { next: buttonName };
            }
            // If there is no operation, update next and clear the value
            if (obj.next) {
                return {
                    next: obj.next + buttonName,
                    total: null,
                };
            }
            return {
                next: buttonName,
                total: null,
            };
        }

        //   if (buttonName === "%") {
        //     if (obj.operation && obj.next) {
        //       const result = operate(obj.total, obj.next, obj.operation);
        //       return {
        //         total: Big(result)
        //           .div(Big("100"))
        //           .toString(),
        //         next: null,
        //         operation: null,
        //       };
        //     }
        //     if (obj.next) {
        //       return {
        //         next: Big(obj.next)
        //           .div(Big("100"))
        //           .toString(),
        //       };
        //     }
        //     return {};
        //   }

        if (buttonName === ".") {
            if (obj.next) {
                // ignore a . if the next number already has one
                if (obj.next.includes(".")) {
                    return {};
                }
                return { next: obj.next + "." };
            }
            return { next: "0." };
        }

        if (buttonName === "=") {
            if (obj.next && obj.operation) {
                return {
                    total: this.operate(obj.total, obj.next, obj.operation),
                    next: null,
                    operation: null,
                };
            } else {
                // '=' with no operation, nothing to do
                return {};
            }
        }

        if (buttonName === "+/-") {
            if (obj.next) {
                return { next: (-1 * parseFloat(obj.next)).toString() };
            }
            if (obj.total) {
                return { total: (-1 * parseFloat(obj.total)).toString() };
            }
            return {};
        }

        // Button must be an operation

        // When the user presses an operation button without having entered
        // a number first, do nothing.
        // if (!obj.next && !obj.total) {
        //   return {};
        // }

        // User pressed an operation button and there is an existing operation
        if (obj.operation) {
            return {
                total: this.operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: buttonName,
            };
        }

        // no operation yet, but the user typed one

        // The user hasn't typed a number yet, just save the operation
        if (!obj.next) {
            return { operation: buttonName };
        }

        // save the operation and shift 'next' into 'total'
        return {
            total: obj.next,
            next: null,
            operation: buttonName,
        };
    }

    private operate(numberOne: any, numberTwo: any, operation: any) {
        const one = Number(numberOne || "0");
        const two = Number(numberTwo || "0");
        if (operation === "+") {
            return one + (two);//.toString();
        }
        if (operation === "-") {
            return one - (two);//.toString();
        }
        if (operation === "x") {
            return one * (two);//.toString();
        }
        if (operation === "÷") {
            return one / (two);//.toString();
        }
        throw Error(`Unknown operation '${operation}'`);
    }

    private isNumber(value: string | number): boolean {
        return !isNaN(Number(value.toString()));
    }

    render() {
        return (
            <div>
                <DisplayPanel value={this.state.next || this.state.total || "0"} />
                <CustomButtonPanel clickHandler={this.valueSender} />
            </div>
        );
    }

}

export default Calculator;