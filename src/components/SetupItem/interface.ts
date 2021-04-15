export default interface IProps {
  time: number;
  label: string;
  onChange: (text: string, label: string) => void;
}