'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

const FormSubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button disabled={pending} type="submit">
			{pending ? 'Saving...' : 'Save'}
		</Button>
	);
};

export default FormSubmitButton;
