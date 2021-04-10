export default interface IButton {
    children?: string;
    type?: string;
    size?: string;
    link?: string;
    styles?: any;
    handleOnPress?: () => void;
}