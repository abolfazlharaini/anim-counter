declare module 'anim-counter' {

    export type AnimCounterClasses = {
        labelWrapper?: string,
        label?: string,
        minus?: string,
        plus?: string,
        root?: string,
    }

    export interface IAnimCounter {
        classes?: AnimCounterClasses;
        minusIcon: any;
        plusIcon: any;
        duration?: number;
        disabled?: boolean;
        onChange?: (newValue: number) => void;
    }

    export const AnimCounter: React.FunctionComponent<IAnimCounter>;
    
}
