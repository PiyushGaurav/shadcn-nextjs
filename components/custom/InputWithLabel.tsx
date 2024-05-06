import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type InputWithLabelProps = {
	label: string;
	type: string;
	id: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputWithLabel({ label, type, id, placeholder, onChange }: InputWithLabelProps) {
	return (
		<div className="my-2">
			<Label htmlFor={id}>{label}</Label>
			<Input type={type} id={id} placeholder={placeholder} onChange={onChange} className="mt-2" />
		</div>
	);
}
