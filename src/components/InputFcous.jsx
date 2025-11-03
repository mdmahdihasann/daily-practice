import { forwardRef, useImperativeHandle, useRef } from "react";

function InputFcous(props, ref) {
    const refRef = useRef(null);
    useImperativeHandle(ref, ()=>(
        {
            focus(){
                refRef.current.focus();
            }
        }
    ))

  return <input {...props} className="border" ref={refRef} />;
}

const InputForwordFocus = forwardRef(InputFcous);
export default InputForwordFocus;
