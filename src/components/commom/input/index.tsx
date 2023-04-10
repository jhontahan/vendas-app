import {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    onChange?: (value: any) => void;
    label: string;
    columClasses?: string;
    value: string;
    id: string;
}

export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    columClasses,
    id,
    ...inputProps
}: InputProps) => {
    return(
        <div className={`field column ${columClasses}`}>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input className="input" id={id}
                                        type="text" 
                                        onChange={e => {
                                            if(onChange){
                                                onChange(e.target.value)
                                            }
                                        }}
                                        {...inputProps}/>
            </div>
        </div>
    )
}