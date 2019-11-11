/// <reference types="react" />
declare type Key = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | '*';
declare type Props = {
    value: string;
    onChange(value: string): void;
    onOpen(): void;
    onClose?(): void;
    open?: boolean;
    disableds: Key[];
};
declare const _default: (props: Props) => JSX.Element;
export default _default;
