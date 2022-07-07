import { FormInputItem } from 'types';
import { FormInputIcons } from 'types/constants';

export const formInputMenu: FormInputItem[] = [
  {
    label: 'First Name',
    format: FormInputIcons.Text,
    type: 'text',
  },
  {
    label: 'Last Name',
    format: FormInputIcons.Text,
    type: 'text',
  },
  {
    label: 'Phone Number',
    format: FormInputIcons.Phone,
    type: 'tel',
  },
  {
    label: 'Email',
    format: FormInputIcons.Email,
    type: 'email',
  },
  {
    label: 'Title',
    format: FormInputIcons.Select,
    type: 'select',
  },
  {
    label: 'Address',
    format: FormInputIcons.Address,
    type: 'text',
  },
  {
    label: 'PersonId',
    format: FormInputIcons.PersonId,
    type: 'text',
  },
  {
    label: 'Password',
    format: FormInputIcons.Password,
    type: 'password',
  },
  {
    label: 'Position',
    format: FormInputIcons.Text,
    type: 'text',
  },
  {
    label: 'Account Type',
    format: FormInputIcons.Select,
    type: 'select',
  },
  {
    label: 'Attachment',
    format: FormInputIcons.File,
    type: 'file',
  },
];
