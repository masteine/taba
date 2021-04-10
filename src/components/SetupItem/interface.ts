export default interface IProps {
  time: number;
  label: string;
  index: number;
  onChange: (text: string, label: string, index: number) => void;
}