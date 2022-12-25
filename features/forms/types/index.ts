export interface FormOption {
  label: string;
  value: any;
}

export enum FormSubmitStatus {
  Idle = "idle",
  Success = "success",
  Error = "error",
}
