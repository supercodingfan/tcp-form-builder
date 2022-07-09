import { FormInputItem } from 'types';
import { FormInputIcons } from 'types/constants';

export const formInputMenu: FormInputItem[] = [
  {
    label: 'First Name',
    name: 'firstName',
    format: FormInputIcons.Text,
    type: 'text',
  },
  {
    label: 'Last Name',
    name: 'lastName',
    format: FormInputIcons.Text,
    type: 'text',
  },
  {
    label: 'Phone Number',
    name: 'phone',
    format: FormInputIcons.Phone,
    type: 'tel',
  },
  {
    label: 'Email',
    name: 'email',
    format: FormInputIcons.Email,
    type: 'email',
  },
  {
    label: 'Title',
    name: 'title',
    format: FormInputIcons.Select,
    type: 'select',
  },
  {
    label: 'Address',
    name: 'address',
    format: FormInputIcons.Address,
    type: 'text',
  },
  {
    label: 'PersonId',
    name: 'personId',
    format: FormInputIcons.PersonId,
    type: 'text',
  },
  {
    label: 'Password',
    name: 'password',
    format: FormInputIcons.Password,
    type: 'password',
  },
  {
    label: 'Position',
    name: 'position',
    format: FormInputIcons.Text,
    type: 'text',
  },
  {
    label: 'Account Type',
    name: 'accountType',
    format: FormInputIcons.Select,
    type: 'select',
  },
  {
    label: 'Attachment',
    name: 'attachment',
    format: FormInputIcons.File,
    type: 'file',
  },
];
