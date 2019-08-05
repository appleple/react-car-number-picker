/// <reference types="react" />
declare type Props = {
    value: string;
    onChange(value: string): void;
    onOpen(): void;
    onClose?(): void;
    open: boolean;
};
declare const _default: (props: Props) => JSX.Element;
export default _default;
