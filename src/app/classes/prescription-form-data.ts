export class PrescriptionFormData {
  constructor(
    public quantityToTake: number,
    public frequency: number,
    public timeToTake: string,
    public duration: string, 
    public asNeeded: boolean,
    public notes: string,
    public drugQuantity: number,
    public refill: string
  ) {}
}
