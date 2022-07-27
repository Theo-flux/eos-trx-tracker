import { useContext } from "react";
import { app } from "../../app/appContext";
import { Input, Button, Div, Section } from "../../shared";
import DataTemplate from "./DataTemplate";

const formData = [
    {
        placeholder: 'Ex. "tsui.mlt"',
        name: 'account',
        type: 'text',
        inputId: 'account',
        labelText: 'EOS ACOUNT*'
    },
    {
        placeholder: 'Ex. "2022-05-16"',
        name: 'b_date',
        type: 'text',
        inputId: 'beginning-date',
        labelText: 'BEGINNING DATE*'
    },
    {
        placeholder: 'Ex. "2022-07-16"',
        name: 'e_date',
        type: 'text',
        inputId: 'end-date',
        labelText: 'END DATE*'
    },
    {
        placeholder: 'Ex. "USD"',
        name: 'm_unit',
        type: 'text',
        inputId: 'monetary-unit',
        labelText: 'MONETARY UNIT*'
    }
];

function Form() {

    const {data, errors, handleSubmit, handleOnChange, apiData} = useContext(app);
    
    return (
        <Section>
            <Div>
                <div className="">
                    <form onSubmit={(event) => handleSubmit(event)} id="get-eos-data" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {
                            formData.map((datum, index) => {
                                const {inputId, placeholder, name, type, labelText} = datum

                                return(
                                    <div className='' key={index}>
                                        <Input
                                            className={`mb-2 ${errors && errors[`${name}`] && 'outline-none ring-2 ring-red-500 ring-opacity-50'}`}
                                            placeholder={placeholder}
                                            name={name}
                                            value={data[`${name}`]}
                                            type={type}
                                            id={inputId}
                                            labelText={labelText}
                                            handleOnChange={handleOnChange}
                                        />
                                        {
                                            errors &&
                                            <small className={`text-red-500`}>{errors[`${name}`]}</small>
                                        }
                                    </div>
                                )
                            })
                        }
                    </form>
                    
                    
                    <div className="w-[100%] mx-auto max-w-[300px] mt-8">
                        <Button formId={"get-eos-data"} text="Get Data" />
                    </div>

                    <DataTemplate/>
                </div>
            </Div>
        </Section>
    )
}

export default Form