type PhonesType = {
  number: string;
};

export type IncomingPhonesType = {
  current: string | undefined;
  new: string;
};

export type AddContactType = {
  first_name: string;
  last_name: string;
  phones: PhonesType[];
};

export type EditContactType = {
  id: number;
} & AddContactType;

export interface IMutateContact extends Omit<EditContactType, 'phones'> {
  phones: IncomingPhonesType[];
  isPhoneChanges?: boolean;
  isAnyChanges?: boolean;
}
