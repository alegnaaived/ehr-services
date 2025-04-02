import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormPage from '../routes/ehr_form';

describe('FormPage', () => {
  it('renders the form correctly', () => {
    render(<FormPage />);
    expect(screen.getByText('Field Mappings')).toBeInTheDocument();
  });
});