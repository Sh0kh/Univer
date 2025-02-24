import { Input, Textarea } from "@material-tailwind/react";

export default function RuNewsCreate({ value, onChange }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <div>
                <Input
                    label="Sarlavha"
                    name="title"
                    value={value.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mt-[20px]">
                <Textarea
                    label="Malumot"
                    name="description"
                    value={value.description}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
}
