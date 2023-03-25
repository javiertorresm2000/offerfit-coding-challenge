export default class ChartCLVData {
  label: string;
  expSum: number;
  ctrlSum: number;

  constructor(label: string, expSum: number, ctrlSum: number) {
    this.label = label;
    this.expSum = expSum;
    this.ctrlSum = ctrlSum;
  }
}